import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducers'
import App from './components/App';

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
