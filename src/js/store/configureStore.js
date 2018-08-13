import { applyMiddleware, compose, createStore } from 'redux'
import composeReducers from './rootReducer'
import thunk from 'redux-thunk'


export default function configureStore() {
  const middleware = [thunk];
  let initialState = {};

  let store;

      // if redux dev tools is installed, use its composer
      const composeEnhancers =
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
              compose;
      /* eslint-enable */

      store = createStore(
        composeReducers(),
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
      );

  return store
  }