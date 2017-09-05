import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import book from './bookAction/reducer';
import suggestion from './suggestionAction/reducer';

const reducers = combineReducers({
  book,
  suggestion
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
