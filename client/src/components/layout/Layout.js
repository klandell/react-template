import React, { Component } from 'react';
import { func } from 'prop-types';

export default class Layout extends Component {
    static propTypes = {
        onAboutClick: func.isRequired,
        onNotFoundClick: func.isRequired,
    }
    render() {
        const { children, onAboutClick, onNotFoundClick } = this.props;

        return (
            <div className="layout">
                <button onClick={onAboutClick}>About</button>
                <button onClick={onNotFoundClick}>404 Not Found</button>
                {children}
            </div>
        );
    }
}
