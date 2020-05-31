import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import reducer from './store/reducers'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CssBaseline} from '@material-ui/core'

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Provider>,
  document.getElementById('root')
);

