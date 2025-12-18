import {Component, computed, input, InputSignal, Signal} from '@angular/core';
import {SocialPlatformName} from '../../types/social-platform-name';

@Component({
    selector: 'app-social-icon-link',
    imports: [],
    templateUrl: './social-link.component.html'
})

// Social media link component for Vueling footer.
// It assumes these Vueling links' structure and available social-media icons in the indicated path.
export class SocialLinkComponent {
    public socialPlatform: InputSignal<SocialPlatformName> = input.required();

    public link: Signal<string> = computed(() => `https://${this.socialPlatform()}.com/vueling`);
    public srcPath: Signal<string> = computed(() => `../../../assets/social-media-icons/${this.socialPlatform()}.svg`);
}
