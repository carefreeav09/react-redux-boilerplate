import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './NotFoundContainer'

const Exception = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}/`} component={Main} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Exception;
