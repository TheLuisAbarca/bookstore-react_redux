import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';
import style from './BookForm.module.css';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Anonymous');
  const [category, setCategory] = useState('default');
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const styleDisplay = { display: 'none' };

  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleNewBook = (e) => {
    e.preventDefault();

    if (title) {
      const newBook = {
        item_id: uuidv4(),
        title,
        author: setAuthor('Anonymous') ? author : 'Anonymous',
        category,
      };
      console.log(newBook);
      dispatch(postBook(newBook));
    }
  };

  return (
    <form onSubmit={handleNewBook}>
      <h2>ADD NEW BOOK</h2>
      <div className={style.formGroup}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title i:e The Hobbit"
          className="form-control"
        />
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book Author i:e J.R.R. Tolkien"
          className="form-control"
          style={styleDisplay}
        />
        <select defaultValue={category} onChange={handleCategoryChange}>
          <option value="default" disabled hidden>
            Category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Add book</button>
      </div>
    </form>
  );
};

export default BooksForm;
