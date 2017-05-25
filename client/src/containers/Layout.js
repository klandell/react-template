import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showAbout, showNotFound } from 'Actions/layoutActions';

@connect(state => state, dispatch => ({
    actions: {
        showAbout,
        showNotFound,
    },
    dispatch,
}))
class Layout extends React.Component {
    static propTypes = {
        actions: PropTypes.shape({
            showAbout: PropTypes.func.isRequired,
            showNotFound: PropTypes.func.isRequired,
        }).isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    onAboutClick() {
        const { actions, dispatch } = this.props;
        dispatch(actions.showAbout());
    }

    onNotFoundClick() {
        const { actions, dispatch } = this.props;
        dispatch(actions.showNotFound());
    }

    render() {
        return (
            <div className="layout-wrapper">
                <button onClick={e => this.onAboutClick(e)}>About</button>
                <button onClick={e => this.onNotFoundClick(e)}>404 Not Found</button>
                {this.props.children}
            </div>
        );
    }
}
export default withRouter(Layout);
