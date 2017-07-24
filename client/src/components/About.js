import React, { Component } from 'react';
import { string } from 'prop-types';
import style_ from 'Sass/containers/About.scss';

export default class About extends Component {
    static propTypes = {
        param1: string,
        param2: string,
    }

    static defaultProps = {
        param1: '',
        param2: '',
    }

    render() {
        const { param1, param2 } = this.props;
        return (
            <div className="about-wrapper">
                <h1>About</h1>
                {param1}
                {param2}
            </div>
        );
    }
}
