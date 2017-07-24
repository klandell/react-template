import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from './About';

test('About component should be able to render no path parameters.', () => {
    const component = shallow(<About />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});

test('About component should be able to render one path parameter.', () => {
    const component = shallow(<About param1="Hello" />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});

test('About component should be able to render two path parameters.', () => {
    const component = shallow(<About param1="Hello" param2="World" />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
