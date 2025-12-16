import {Component, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SideMenuOptions} from '../../types/side-menu-options';

@Component({
    selector: 'app-side-menu',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
    public menuItems = input.required<SideMenuOptions[]>();
}
