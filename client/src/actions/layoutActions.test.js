import { REDUX_ROUTER_CALL_HISTORY_METHOD } from 'Constants';
import { showAbout, showNotFound } from './layoutActions';


test('Should be able to push the about page into the browser history.', () => {
    const action = showAbout();

    expect(action).toEqual(expect.objectContaining({
        type: REDUX_ROUTER_CALL_HISTORY_METHOD,
        payload: {
            method: 'push',
            args: ['/about'],
        },
    }));
});

test('Should be able to push the error page into the browser history.', () => {
    const action = showNotFound();

    expect(action).toEqual(expect.objectContaining({
        type: REDUX_ROUTER_CALL_HISTORY_METHOD,
        payload: {
            method: 'push',
            args: ['/something.else'],
        },
    }));
});
