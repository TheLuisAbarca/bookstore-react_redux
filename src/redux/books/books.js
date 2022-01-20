import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const POST_BOOK = 'bookStore/books/APIPOST_BOOKS_SUCCESS';
const DEL_BOOK = 'bookStore/books/APIDEL_BOOK';
const ERROR = 'bookStore/books/ERROR';

const APIKEY = 'ea9vveJ8sUcrEu0BbsG5';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APIKEY}/books`;
const parameters = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
};

// const initialState = [];

const initialState = {
  books: [],
  error: '',
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: {
    ...payload,
    id: uuidv4(),
  },
});

export const postBook = (book) => (dispatch) => fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(book),
})
  .then((response) => response.text())
  .then(
    (data) => dispatch({ type: POST_BOOK, book, data }),
    (error) => dispatch({ type: ERROR, error }),
  );

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const deleteBook = (itemId) => (dispatch) => fetch(`${URL}/${itemId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ item_id: itemId }),
})
  .then((response) => response.text())
  .then(
    (data) => dispatch({ type: DEL_BOOK, item_id: itemId, data }),
    (error) => dispatch({ type: ERROR, error }),
  );

export const fetchBooks = () => (dispatch) => fetch(URL, parameters)
  .then((response) => response.json())
  .then((data) => dispatch({ type: FETCH_BOOKS, data }),
    (error) => dispatch({ type: ERROR, error }));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS: {
      const fetchedBooks = [];
      Object.keys(action.data).forEach((id) => {
        fetchedBooks.push({ item_id: id, ...action.data[id][0] });
      });
      return {
        ...state,
        books: [...state.books, ...fetchedBooks],
      };
    }
    case POST_BOOK: {
      return {
        ...state,
        books: [...state.books, action.book],
      };
    }
    case DEL_BOOK: {
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== action.item_id),
      };
    }
    case ERROR: {
      return {
        ...state,
        loading_error: action.error,
      };
    }
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default:
      return state;
  }
};

export default reducer;
