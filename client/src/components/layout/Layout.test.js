import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from './Layout';

test('Layout component should be able to render no children.', () => {
    const component = shallow(
        <Layout
          onAboutClick={() => {}}
          onNotFoundClick={() => {}}
        />,
    );
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});

test('Layout component should be able to render children.', () => {
    const component = shallow(
        <Layout
          onAboutClick={() => {}}
          onNotFoundClick={() => {}}
        >
            <div>Hello</div>
            <div>World</div>
        </Layout>,
    );
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
