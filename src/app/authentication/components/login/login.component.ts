import {Component, inject, signal} from '@angular/core';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-login',
    imports: [
        MatFormField,
        MatLabel,
        MatError,
        MatCardContent,
        MatCardTitle,
        MatCard,
        MatInputModule,
        ReactiveFormsModule,
        MatButton
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export default class LoginComponent {
    fb: FormBuilder = inject(FormBuilder);
    router: Router = inject(Router);
    error = signal<string | undefined>('');

    authService: AuthenticationService = inject(AuthenticationService);

    loginForm: FormGroup = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }

        const {username = '', password = ''} = this.loginForm.value;

        this.authService.login(username, password).subscribe({
                next: (isAuthenticated: boolean) => {
                    if (isAuthenticated) {
                        this.router.navigateByUrl('/');
                        return;
                    }
                },
                error: (error: HttpErrorResponse) => {
                    this.error.set(error.error.message);
                }
            }
        );
    }

    isControlInvalid(controlName: string): boolean {
        const control: FormControl = this.loginForm.get(controlName) as FormControl;
        return control.invalid;
    }
}
