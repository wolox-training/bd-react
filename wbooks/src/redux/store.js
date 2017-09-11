import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import book from './bookAction/reducer';
import comment from './commentAction/reducers';
import user from './userAction/reducers';
import suggestion from './suggestionAction/reducer';

const reducers = combineReducers({
  book,
  comment,
  suggestion,
  user
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
