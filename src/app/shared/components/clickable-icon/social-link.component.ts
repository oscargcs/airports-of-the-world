import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {SocialPlatformName} from '../types/social-platform-name';

@Component({
    selector: 'app-social-icon-link',
    imports: [],
    templateUrl: './social-link.component.html',
    styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
    socialPlatform: InputSignal<SocialPlatformName> = input.required();

    link: Signal<string> = computed(() => `https://${this.socialPlatform()}.com/vueling`);
    srcPath: Signal<string> = computed(() => `../../../assets/${this.socialPlatform()}.svg`);
}
