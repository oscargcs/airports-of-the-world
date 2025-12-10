import {Component, signal} from '@angular/core';

@Component({
    selector: 'app-side-menu',
    standalone: true,
    imports: [],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
    menuItems = signal([
        {label: 'Menu ítem 1', link: '#'},
        {label: 'Menu ítem 2', link: '#'}
    ]); // make it an input
}
