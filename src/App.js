import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

const URL = process.env.PUBLIC_URL;

const App = () => (
  <BrowserRouter basename={URL}>
    <>
      <Navbar />
      <div className="Bookstore">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  </BrowserRouter>
);

export default App;
