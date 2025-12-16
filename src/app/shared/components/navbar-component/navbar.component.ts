import {Component, computed, inject, Signal} from '@angular/core';
import {Location} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {Store} from '@ngrx/store';
import {logout} from '../../../authentication/store/auth.actions';
import {selectUser} from '../../../authentication/store/auth.selectors';
import {User} from '../../../authentication/types/user';
import {toSignal} from '@angular/core/rxjs-interop';
import {first} from 'rxjs';

@Component({
    selector: 'app-navbar-component',
    imports: [MatIconButton],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    private location = inject(Location);
    private store = inject(Store);

    private user: Signal<User | null> = toSignal(
        this.store.select(selectUser).pipe(first()),
        {initialValue: null}
    );

    public username = computed(() => this.user()?.username);

    logout(): void {
        this.store.dispatch(logout());
    }

    navigateBack(): void {
        this.location.back();
    }
}
