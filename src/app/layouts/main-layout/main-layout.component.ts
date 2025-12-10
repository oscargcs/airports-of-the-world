import {Component} from '@angular/core';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {NavbarComponent} from '../../shared/components/navbar-component/navbar.component';
import {RouterOutlet} from '@angular/router';
import {SideMenuComponent} from '../../shared/components/side-menu/side-menu.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
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

}
