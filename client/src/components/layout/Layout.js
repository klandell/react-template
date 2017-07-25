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
                <button className="about-btn" onClick={onAboutClick}>About</button>
                <button className="not-found-btn" onClick={onNotFoundClick}>404 Not Found</button>
                {children}
            </div>
        );
    }
}
