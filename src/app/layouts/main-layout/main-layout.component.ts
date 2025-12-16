import {Component, signal} from '@angular/core';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {NavbarComponent} from '../../shared/components/navbar-component/navbar.component';
import {RouterOutlet} from '@angular/router';
import {SideMenuComponent} from '../../shared/components/side-menu/side-menu.component';
import {ClickableTextLink} from '../../shared/components/types/clicable-text-link';
import {SocialPlatformName} from '../../shared/components/types/social-platform-name';

@Component({
    selector: 'app-main-layout',
    imports: [
        FooterComponent,
        NavbarComponent,
        RouterOutlet,
        SideMenuComponent
    ],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export default class MainLayoutComponent {
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
