import React from 'react';
import {Provider} from 'react-redux';

import store from '../src/store';

import TodoList from './TodoList';


function App() {
  return (
    <Provider store={store}>
       <TodoList/>
    </Provider>
  );
}

export default App;
