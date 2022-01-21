import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Anonymous');
  const [category, setCategory] = useState('default');
  const categories = useSelector((state) => state.categoriesReducer.categories);

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
        author,
        category,
      };

      dispatch(postBook(newBook));
    }
  };

  return (
    <form onSubmit={handleNewBook}>
      <div className="form-group">
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title i:e The Hobbit"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Book author i:e J.R.R. Tolkien"
          className="form-control"
        />
      </div>
      <div className="form-group">
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
      </div>
      <button type="submit">Add book</button>
    </form>
  );
};

export default BooksForm;
