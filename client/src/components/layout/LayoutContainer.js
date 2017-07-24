import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showAbout, showNotFound } from 'Actions/layoutActions';
import Layout from './Layout';

@connect(() => ({}), dispatch => ({
    actions: {
        showAbout,
        showNotFound,
    },
    dispatch,
}))
class LayoutContainer extends Component {
    onAboutClick = () => {
        const { actions, dispatch } = this.props;
        dispatch(actions.showAbout());
    }

    onNotFoundClick = () => {
        const { actions, dispatch } = this.props;
        dispatch(actions.showNotFound());
    }

    render() {
        const { onAboutClick, onNotFoundClick, props } = this;
        return (
            <Layout
              onAboutClick={onAboutClick}
              onNotFoundClick={onNotFoundClick}
            > {props.children}</Layout>
        );
    }
}
export default withRouter(LayoutContainer);
