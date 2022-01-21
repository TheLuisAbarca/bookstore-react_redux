import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const middleWares = [thunk, logger];

const store = createStore(
  reducer,
  applyMiddleware(...middleWares),
);

export default store;
