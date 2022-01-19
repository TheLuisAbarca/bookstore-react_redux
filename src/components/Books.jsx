import React from 'react';
import { useSelector } from 'react-redux';
import BooksForm from './BookForm';
import Book from './BookElement';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  if (!books.length) {
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
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <BooksForm />
    </div>
  );
};

export default Books;
