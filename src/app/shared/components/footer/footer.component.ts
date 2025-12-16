import {Component, input} from '@angular/core';
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
    public textLinks = input<ClickableTextLink[]>();

    public iconLinks = input<SocialPlatformName[]>();
}
