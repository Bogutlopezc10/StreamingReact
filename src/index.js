import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App';
import reducers from './reducers';

import { Auth0Provider } from "./auth0wrapper";
import history from "./history";

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const persistor = persistStore(store);

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={'dev-edu.auth0.com'}
      client_id={'Y1cBg3gAh8EzE7sU07ATZ67fpn9gRQOP'}
      redirect_uri={'http://localhost:3000'}
      audience={'http://localhost:5001/api'}
      onRedirectCallback={onRedirectCallback}
    >
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Auth0Provider>
  </Provider>
  , document.querySelector('#root')
);
