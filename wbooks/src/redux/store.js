import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import book from './bookAction/reducer';

const reducers = combineReducers({
  book
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
