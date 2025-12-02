import {Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-error',
    standalone: true,
    imports: [],
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss'
})
export class ErrorComponent {
    public error: InputSignal<string> = input.required();
}
