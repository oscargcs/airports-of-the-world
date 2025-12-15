import {Component, input, InputSignal} from '@angular/core';

@Component({
    selector: 'app-text-link',
    imports: [],
    templateUrl: './text-link.component.html',
    styleUrl: './text-link.component.scss'
})
export class TextLinkComponent {
    public href: InputSignal<string> = input.required();
    public label: InputSignal<string> = input.required();
}
