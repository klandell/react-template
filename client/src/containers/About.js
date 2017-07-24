import React from 'react';
import style_ from 'Sass/containers/About.scss';

export default class About extends React.Component {
    renderParam(param) {
        const value = this.props.match.params[param];
        return value ? <h1>{value}</h1> : null;
    }

    render() {
        const param1 = this.renderParam('param1');
        const param2 = this.renderParam('param2');

        return (
            <div className="about-wrapper">
                <h1>About</h1>
                {param1}
                {param2}
            </div>
        );
    }
}
