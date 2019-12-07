import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css'
//CSS Material Kit
// import './assets/css/material-kit.min.css'

import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './containers/App';
import configureStore, {history} from './store/configureStore';
import {AuthProvider} from './components/Layout/Header/AuthContext';

import * as serviceWorker from './serviceWorker';
const store = configureStore();
const mountNode = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
        <ConnectedRouter history={history}>
            <Router history={history}>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </Router>
        </ConnectedRouter>
    </Provider>,
    mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
