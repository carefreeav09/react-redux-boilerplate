import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import StaticLayout from '../../components/Layout/Layout/Static';

import {
    AsyncHome,
} from "./AsyncComponent";

const App = () =>(
    <React.Fragment>
        <Switch>
            <PublicRoute exact path='/' layout={StaticLayout} component={AsyncHome}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

