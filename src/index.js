import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import { Auth0Provider } from "./auth0wrapper";
import history from "./history";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);



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
    <Auth0Provider
      domain={'dev-edu.auth0.com'}
      client_id={'Y1cBg3gAh8EzE7sU07ATZ67fpn9gRQOP'}
      redirect_uri={'http://localhost:3000'}
      audience={'http://localhost:5001/api'}
      onRedirectCallback={onRedirectCallback}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
    , document.querySelector('#root')
);
