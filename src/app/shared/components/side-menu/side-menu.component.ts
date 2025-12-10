import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SideMenuOptions} from '../types/side-menu-options';

@Component({
    selector: 'app-side-menu',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
    menuItems = signal<SideMenuOptions[]>([{label: 'Airports', link: '/airports'}]);
}
