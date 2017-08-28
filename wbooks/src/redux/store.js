import { combineReducers, createStore } from 'redux';

import book from './bookAction/reducer';

const reducers = combineReducers({
  book
});

const store = createStore(reducers);

export default store;
