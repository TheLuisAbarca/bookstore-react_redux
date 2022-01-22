import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import style from './BookElement.module.css';

import RoundProgressBar from './RoundProgressBar';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleDelBook = (id) => {
    dispatch(deleteBook(id));
  };

  const current = Math.floor(Math.random() * 100);
  const total = current + Math.floor(Math.random() * 100);
  const percentage = Math.round((current / total) * 100) || 0;
  // const classes = `${style.bookCard} ${style.bookWrapper}`;

  return (
    <li className={style.bookWrapper}>
      <div className={style.bookCard}>
        <div className={style.category}>{book.category}</div>
        <div className={style.bookTitle}>{book.title}</div>
        <div className={style.author}>{book.author}</div>
        <ul className={style.options}>
          <li><button type="button">Comments</button></li>
          <li><hr /></li>
          <li>
            <button type="button" onClick={() => handleDelBook(book.item_id)}>Remove</button>
          </li>
          <li><hr /></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className={style.progressWrapper}>
        <div className={style.showProgress}>
          <RoundProgressBar percentage={percentage} />
        </div>
        <hr />
        <div className={style.updateProgress}>
          <p className={style.current}>Current Chapter</p>
          <p className={style.chapter}>
            Chapter &nbsp;
            {current}
            {' '}
            of
            {' '}
            {total}
          </p>
          <button type="button" className={style.update}>
            Update Progress
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
