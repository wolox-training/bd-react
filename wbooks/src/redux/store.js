import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import book from './bookAction/reducer';
import comment from './commentAction/reducers';

const reducers = combineReducers({
  book,
  comment
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
