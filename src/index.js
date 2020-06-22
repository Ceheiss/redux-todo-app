import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { todoReducer, textReducer } from './reducers';

const rootReducer = combineReducers({
  todos: todoReducer,
  text: textReducer,
});

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
