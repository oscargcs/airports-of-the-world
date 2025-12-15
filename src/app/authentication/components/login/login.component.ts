import {Component, inject, Signal} from '@angular/core';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Store} from '@ngrx/store';
import {login} from '../../store/auth.actions';
import {selectError, selectIsLoading} from '../../store/auth.selectors';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

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
        MatButton,
        MatProgressSpinner
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export default class LoginComponent {
    error: Signal<string | null>;
    isLoading: Signal<boolean>;

    fb: FormBuilder = inject(FormBuilder);
    store = inject(Store);

    constructor() {
        this.error = toSignal(
            this.store.select(selectError),
            {initialValue: null}
        );
        this.isLoading = toSignal(this.store.select(selectIsLoading), {initialValue: false});
    }

    loginForm: FormGroup = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    onSubmit(): void {
        if (this.loginForm.invalid) {
            return;
        }

        const {username = '', password = ''} = this.loginForm.value;

        this.store.dispatch(login({username, password}));
    }

    isControlInvalid(controlName: string): boolean {
        const control: FormControl = this.loginForm.get(controlName) as FormControl;
        return control.invalid;
    }
}
