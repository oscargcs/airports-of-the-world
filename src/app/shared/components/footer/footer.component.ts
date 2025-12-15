import {Component, signal} from '@angular/core';
import {SocialLinkComponent} from '../../ui/clickable-icon/social-link.component';
import {SocialPlatformName} from '../types/social-platform-name';
import {ClickableTextLink} from '../types/clicable-text-link';
import {TextLinkComponent} from '../../ui/text-link/text-link.component';

@Component({
    selector: 'app-footer',
    imports: [
        SocialLinkComponent,
        TextLinkComponent
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public textLinks = signal<ClickableTextLink[]>([
        {
            label: 'About us',
            href: 'https://www.vueling.com/en/about-us'
        },
        {
            label: 'Help',
            href: 'https://www.vueling.com/en/we-are-vueling/contact'
        }
    ]);

    public iconLinks = signal<SocialPlatformName[]>(['twitter', 'facebook', 'instagram', 'youtube']);
}
