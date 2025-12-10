import {Component} from '@angular/core';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {NavbarComponent} from '../../shared/components/navbar-component/navbar.component';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent,
        RouterOutlet
    ],
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss'
})
export default class MainLayoutComponent {

}
