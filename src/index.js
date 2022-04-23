import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ToDoListApp } from './ToDoListApp';

import store from './store/store';

import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <ToDoListApp  />
  </Provider>,
  document.getElementById('root')
);
