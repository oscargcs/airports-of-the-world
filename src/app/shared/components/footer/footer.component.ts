import {Component, signal} from '@angular/core';
import {SocialLinkComponent} from '../clickable-icon/social-link.component';
import {SocialPlatform} from '../types/social-platform';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        SocialLinkComponent
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    icons = signal<SocialPlatform[]>(['twitter', 'facebook', 'instagram', 'youtube']);
}
