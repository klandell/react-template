import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from './Layout';

const Page = {
    aboutBtn: '.about-btn',
    notFoundBtn: '.not-found-btn',
};

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

test('Layout component should call props.onAboutClick when the about button is clicked.', () => {
    const onAboutClickMock = jest.fn();
    const component = shallow(
        <Layout
          onAboutClick={onAboutClickMock}
          onNotFoundClick={() => {}}
        />,
    );

    component.find(Page.aboutBtn).simulate('click');
    expect(onAboutClickMock).toHaveBeenCalled();
});

test('Layout component should call props.onNotFoundClick when the not found button is clicked.', () => {
    const onNotFoundClickMock = jest.fn();
    const component = shallow(
        <Layout
          onAboutClick={() => {}}
          onNotFoundClick={onNotFoundClickMock}
        />,
    );

    component.find(Page.notFoundBtn).simulate('click');
    expect(onNotFoundClickMock).toHaveBeenCalled();
});
