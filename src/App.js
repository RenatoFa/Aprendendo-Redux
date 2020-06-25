import React from 'react';
import {Provider} from 'react-redux'
import store from '../src/store'


function App() {
  return (
    <Provider store={store}>
       <div>Hey</div>
    </Provider>
  );
}

export default App;
