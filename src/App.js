import React from 'react';
import {Provider} from 'react-redux';

import store from '../src/store';

import TodoList from './TodoList';
import Counter from './Counter';


function App() {
  return (
    <Provider store={store}>
      <div>
      <TodoList/>
       <Counter/>
      </div>
    </Provider>

  );
}

export default App;
