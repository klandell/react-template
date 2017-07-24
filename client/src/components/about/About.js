import React, { Component } from 'react';
import { string } from 'prop-types';
import style_ from './About.scss';

export default class About extends Component {
    static propTypes = {
        param1: string,
        param2: string,
    }

    static defaultProps = {
        param1: '',
        param2: '',
    }

    renderParam(value) {
        return value ? <h1>{value}</h1> : null;
    }

    render() {
        const { param1, param2 } = this.props;
        return (
            <div className="about">
                <h1>About</h1>
                {this.renderParam(param1)}
                {this.renderParam(param2)}
            </div>
        );
    }
}
