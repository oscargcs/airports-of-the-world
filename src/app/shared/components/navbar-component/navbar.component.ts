import {Component, inject} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {Location} from '@angular/common';
import {MatIconButton} from '@angular/material/button';

@Component({
    selector: 'app-navbar-component',
    standalone: true,
    imports: [MatToolbarModule, MatIconButton],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    authService = inject(AuthenticationService);
    router = inject(Router);
    location = inject(Location);

    logout(): void {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    }

    navigateBack(): void {
        this.location.back();
    }
}
