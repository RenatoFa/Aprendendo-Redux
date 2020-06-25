import {createStore} from 'redux';

import reducers from './reducers/index';

//1º Passo , criar um store para aplicação
const store = createStore(reducers)

export default store;