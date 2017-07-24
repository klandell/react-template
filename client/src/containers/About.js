import React from 'react';
import About from 'Components/About';

export default class AboutContainer extends React.Component {
    renderParam(param) {
        const value = this.props.match.params[param];
        return value ? <h1>{value}</h1> : null;
    }

    render() {
        const param1 = this.renderParam('param1');
        const param2 = this.renderParam('param2');

        return (
            <About
              param1={param1}
              param2={param2}
            />
        );
    }
}
