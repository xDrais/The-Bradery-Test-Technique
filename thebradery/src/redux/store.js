
import { createStore } from 'redux';
import quantityReducer from './reducer';

const store = createStore(quantityReducer);

export default store;
