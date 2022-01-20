import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksForm from './BookForm';
import Book from './BookElement';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const booksKeys = Object.keys(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const miliDate = Date.now();
  console.log(books);
  console.log(miliDate);
  console.log(booksKeys);

  if (!books.books.length) {
    return (
      <div className="book-list">
        <h2>No books found</h2>
        <BooksForm />
      </div>
    );
  }

  return (
    <div className="book-list">
      <ul className="book-list-container">
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
