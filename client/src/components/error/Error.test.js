import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error from './Error';

test('Error component should render a 404 error.', () => {
    const component = shallow(<Error />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
