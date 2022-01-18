import React from 'react';
import Book from './BookElement';

const Books = () => (
  <div className="book-list">
    <ul className="book-list-container">
        <Book />
    </ul>
    <form action='/'>
      <input type='text'/>
      <select>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <button type="submit">Add book</button>
    </form>
  </div>
);

export default Books;