import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import About from './About';
import style_ from './About.scss';

// Wrap About in a container so that our presentation component has no dependencies on the router.
export default class AboutContainer extends Component {
    static propTypes = {
        match: shape({
            params: shape({
                param1: string,
                param2: string,
            }),
        }).isRequired,
    }

    render() {
        const { param1, param2 } = this.props.match.params;
        return (
            <About
              param1={param1}
              param2={param2}
            />
        );
    }
}
