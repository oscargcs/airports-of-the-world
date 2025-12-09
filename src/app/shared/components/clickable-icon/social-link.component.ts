import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {SocialPlatform} from '../types/social-platform';

@Component({
    selector: 'app-social-link',
    standalone: true,
    imports: [],
    templateUrl: './social-link.component.html',
    styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
    socialPlatform: InputSignal<SocialPlatform> = input.required();

    link: Signal<string> = computed(() => `https://${this.socialPlatform()}.com/vueling`);
    srcPath: Signal<string> = computed(() => `../../../assets/${this.socialPlatform()}.svg`);
}
