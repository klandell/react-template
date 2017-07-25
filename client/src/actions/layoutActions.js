import { push } from 'react-router-redux';

export function showAbout() {
    return push('/about');
}

export function showNotFound() {
    return push('/something.else');
}
