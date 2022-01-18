import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import './App.css';

const App = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <div className="Bookstore">
        <Routes>
          {routes.map(({ routePath, routeComponent }) => (
            <Route key={routePath} path={routePath} element={routeComponent} />
          ))}
        </Routes>
      </div>
    </>
  </BrowserRouter>
);

export default App;
