import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import LayoutContainer from 'Components/layout/LayoutContainer';
import App from './App';

test('App should have a redux provider.', () => {
    const component = shallow(<App />);
    expect(component.find(Provider).length).toBe(1);
});

test('App should have a connected router.', () => {
    const component = shallow(<App />);
    expect(component.find(ConnectedRouter).length).toBe(1);
});

test('App should have a layout container.', () => {
    const component = shallow(<App />);
    expect(component.find(LayoutContainer).length).toBe(1);
});
