import history from './history';

test('History should export a browser history object', () => {
    expect(history).toEqual(expect.objectContaining({
        length: expect.any(Number),
        location: expect.any(Object),
    }));
});
