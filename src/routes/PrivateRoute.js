import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {AuthConsumer} from '../components/Layout/Header/AuthContext'

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => (

  <AuthConsumer>
    {({isAuthenticated}) => (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ?
            <Layout><Component {...props} /></Layout>
            :
            <Redirect to={{
              pathname: '/login',
              state: {from: props.location}
            }}/>
        }
      />
    )}
  </AuthConsumer>
);

export default PrivateRoute;
