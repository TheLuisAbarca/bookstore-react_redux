import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksForm from './BookForm';
import Book from './BookElement';
import { fetchBooks } from '../redux/books/books';
import style from './Books.module.css';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  // const booksKeys = Object.keys(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  // const miliDate = Date.now();

  const navBar = document.querySelector('#mainNavBar');

  if (navBar) {
    navBar.firstChild.classList.toggle('active', false);
    navBar.lastChild.classList.toggle('active', false);
  }

  if (!books.books.length) {
    return (
      <div className={style.bookList}>
        <h2>No books found</h2>
        <BooksForm />
      </div>
    );
  }

  return (
    <div className={style.bookList}>
      <ul id="booksList">
        {books.books.map((book, index) => (
          <Book
            key={index + 1} // eslint-disable-line
            id={book.item_id}
            book={book}
          />
        ))}
      </ul>
      <BooksForm />
    </div>
  );
};

export default Books;
