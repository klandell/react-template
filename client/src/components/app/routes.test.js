import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Home from 'Components/home/Home';
import AboutContainer from 'Components/about/AboutContainer';
import Error from 'Components/error/Error';
import routes from './routes';

test('Router should render the Home component when visiting /.', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/']}>
            {routes}
        </MemoryRouter>,
    );
    expect(component.find(Home).length).toBe(1);
});

test('Router should render the Home component when visiting /home.', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/home']}>
            {routes}
        </MemoryRouter>,
    );
    expect(component.find(Home).length).toBe(1);
});

test('Router should render the AboutContainer component when visiting /about.', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/about']}>
            {routes}
        </MemoryRouter>,
    );
    expect(component.find(AboutContainer).length).toBe(1);
});

test('Router should render the AboutContainer component when visiting /about:param1?.', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/about/foo']}>
            {routes}
        </MemoryRouter>,
    );
    expect(component.find(AboutContainer).length).toBe(1);
});

test('Router should render the AboutContainer component when visiting /about:param1?/:param2?.', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/about/foo/bar']}>
            {routes}
        </MemoryRouter>,
    );
    expect(component.find(AboutContainer).length).toBe(1);
});

test('Router should render the error component when visiting any other page.', () => {
    let component = mount(
        <MemoryRouter initialEntries={['/foo']}>
            {routes}
        </MemoryRouter>,
    );
    expect(component.find(Error).length).toBe(1);

    component = mount(
        <MemoryRouter initialEntries={['/about/foo/bar/baz']}>
            {routes}
        </MemoryRouter>,
    );
    expect(component.find(Error).length).toBe(1);
});
