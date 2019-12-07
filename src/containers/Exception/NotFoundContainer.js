import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NotFound from '../../components/Exceptions/';

export class NotFoundContainer extends Component {

    render() {
        return (
            <NotFound
                {...this.props}
            />
        );
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    // return {
    //     actions: bindActionCreators(
    //         Object.assign({}),
    //         dispatch
    //     ),
    // };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotFoundContainer);
