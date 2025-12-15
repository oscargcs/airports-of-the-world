import {User} from '../types/user';
import {AUTH_STORAGE_KEYS} from '../types/auth-storage.keys';

const storedUser: string | null = localStorage.getItem(AUTH_STORAGE_KEYS.USER);
const storedSecurityKey: string | null = localStorage.getItem(AUTH_STORAGE_KEYS.SECURITY_KEY);

export interface AuthState {
    user: User | null;
    error: string | null;
    securityKey: string | null;
    isLoading: boolean;
}

export const initialAuthState: AuthState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    error: null,
    securityKey: storedSecurityKey || null,
    isLoading: false
};
