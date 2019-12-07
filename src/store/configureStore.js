import {applyMiddleware, compose, createStore} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';

import createRootReducer from '../reducers';
import history from '../utils/history';

function configureStoreProd(initialState = {}) {

  // Add middleware
  // 1. thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  // 2. routerMiddleware: Syncs the location/URL path to the state

  const middlewares = [thunk, routerMiddleware(history),];

  return createStore(createRootReducer(history), initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev(initialState = {}) {

  // Add middleware
  // 1. Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
  // 2. thunk middleware can also accept an extra argument to be passed to each thunk action
  // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
  // 3. routerMiddleware: Syncs the location/URL path to the state

  const middlewares = [reduxImmutableStateInvariant(), thunk, routerMiddleware(history),];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(createRootReducer(history), initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export {
  history
}

export default configureStore;
