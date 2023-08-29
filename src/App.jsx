import { useState } from 'react'
import {Routes, Route, Link, NavLink, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import './App.css'
import BookLayout from './BookLayout';
import {BookRoutes} from "./BookRoutes.jsx";

function App() {
    const location = useLocation()
  return (
    <>
      {/*<Routes location={"/books"}>*/}
      {/*  <Route path="/books" element={<h1>extra content</h1>} />*/}
      {/*</Routes>*/}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books" >Books</NavLink>
          </li>
        </ul>
      </nav>
        {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
