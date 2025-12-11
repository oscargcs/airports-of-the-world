import {Component, inject} from '@angular/core';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

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

    authService: AuthenticationService = inject(AuthenticationService);

    loginForm: FormGroup = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    onSubmit(): void {
        const {username = '', password = ''} = this.loginForm.value;

        this.authService.login(username, password).subscribe((isAuthenticated: boolean) => {
            console.log('login:: isAuthenticated', isAuthenticated);
            if (isAuthenticated) {
                this.router.navigateByUrl('/');
                return;
            }
        });
    }

    isControlInvalid(controlName: string): boolean {
        const control: FormControl = this.loginForm.get(controlName) as FormControl;
        return control.invalid;
    }
}
