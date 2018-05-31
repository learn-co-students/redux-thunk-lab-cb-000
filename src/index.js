import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';
import combinedReducer from './reducers';
import { ConnectedApp } from './App'

const store = createStore(
  combinedReducer, applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
