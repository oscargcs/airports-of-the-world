import {Component, input, InputSignal} from '@angular/core';
import {MatError} from '@angular/material/form-field';

@Component({
    selector: 'app-error',
    imports: [MatError],
    templateUrl: './error.component.html',
})
export class ErrorComponent {
    public error: InputSignal<string> = input.required();
}
