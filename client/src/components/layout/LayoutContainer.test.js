import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store';
import LayoutContainer from './LayoutContainer';
import Layout from './Layout';

const mockStore = configureMockStore();

test('LayoutWrapper properly renders the layout component with no children.', () => {
    const store = mockStore();
    const component = mount(
        <Provider store={store}>
            <MemoryRouter>
                <LayoutContainer />
            </MemoryRouter>
        </Provider>,
    );
    const tree = toJson(component.find(Layout));
    expect(tree).toMatchSnapshot();
});

test('LayoutWrapper properly renders the layout component with children.', () => {
    const store = mockStore();
    const component = mount(
        <Provider store={store}>
            <MemoryRouter>
                <LayoutContainer>
                    <div>Foo</div>
                    <div>Bar</div>
                </LayoutContainer>
            </MemoryRouter>
        </Provider>,
    );
    const tree = toJson(component.find(Layout));
    expect(tree).toMatchSnapshot();
});

// TODO: test the event listeners
/*
test('Blah.....', () => {
    const store = mockStore();
    const component = mount(
        <Provider store={store}>
            <MemoryRouter>
                <LayoutContainer />
            </MemoryRouter>
        </Provider>,
    );

    const cmp = component.find(LayoutContainer).mount();

    // cmp.onAboutClick = jest.fn();

    component.find('.about-btn').simulate('click');

    console.log(cmp);
    // expect(cmp.onAboutClick).toBeCalled();
});
*/
