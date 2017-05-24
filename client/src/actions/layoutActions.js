import { push } from 'react-router-redux';

export function showAbout() {
    return (dispatch) => {
        dispatch(push('/about'));
    };
}

export function showNotFound() {
    return (dispatch) => {
        dispatch(push('/something.else'));
    };
}
