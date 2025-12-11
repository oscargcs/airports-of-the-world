import {Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-text-link',
    imports: [],
    templateUrl: './text-link.component.html',
    styleUrl: './text-link.component.scss'
})
export class TextLinkComponent {
    href: InputSignal<string> = input.required();
    label: InputSignal<string> = input.required();
}
