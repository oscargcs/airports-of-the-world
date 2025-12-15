import {Component, computed, inject, Signal} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {Store} from '@ngrx/store';
import {logout} from '../../../authentication/store/auth.actions';
import {selectUser} from '../../../authentication/store/auth.selectors';
import {User} from '../../../authentication/types/user';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-navbar-component',
    imports: [MatIconButton],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    router = inject(Router);
    location = inject(Location);
    store = inject(Store);

    user: Signal<User | null> = toSignal(
        this.store.select(selectUser),
        {initialValue: null}
    );

    username = computed(() => this.user()?.username);

    logout(): void {
        this.store.dispatch(logout());
    }

    navigateBack(): void {
        this.location.back();
    }
}
