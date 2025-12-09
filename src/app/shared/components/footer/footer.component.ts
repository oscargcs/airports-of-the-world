import {Component, signal} from '@angular/core';
import {SocialLinkComponent} from '../clickable-icon/social-link.component';
import {SocialPlatformName} from '../types/social-platform-name';
import {ClickableTextLink} from '../types/clicable-text-link';
import {TextLinkComponent} from '../text-link/text-link.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        SocialLinkComponent,
        TextLinkComponent
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    textLinks = signal<ClickableTextLink[]>([
        {
            label: 'About us',
            href: 'https://www.vueling.com/en/about-us'
        },
        {
            label: 'Help',
            href: 'https://www.vueling.com/en/we-are-vueling/contact'
        }
    ]);

    iconLinks = signal<SocialPlatformName[]>(['twitter', 'facebook', 'instagram', 'youtube']);
}
