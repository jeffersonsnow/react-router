import { useState } from 'react'
import {Routes, Route, Link, useRoutes} from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import './App.css'
import BookLayout from './BookLayout';
import {BookRoutes} from "./BookRoutes.jsx";

function App() {
    let element = useRoutes([
        {
            path: '/',
            element: <Home/>
        },{
            path: '*',
            element: <NotFound/>
        },
    ])
  return (
    <>
      {/*<Routes location={"/books"}>*/}
      {/*  <Route path="/books" element={<h1>extra content</h1>} />*/}
      {/*</Routes>*/}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books" >Books</Link>
          </li>
        </ul>
      </nav>
        {element}
      {/*<Routes>*/}
      {/*  <Route path="/" element={<Home />} />*/}
      {/*  <Route path="/books/*" element={<BookRoutes/>} />*/}
      {/*  /!*<Route path="/books" element={<BookLayout/>}>*!/*/}
      {/*  /!*  <Route index element={<BookList />} />*!/*/}
      {/*  /!*  <Route path=":id" element={<Book />} />*!/*/}
      {/*  /!*  <Route path="new" element={<NewBook />} />*!/*/}
      {/*  /!*</Route>*!/*/}
      {/*  <Route path="*" element={<NotFound />} />*/}
      {/*</Routes>*/}
    </>
  )
}

export default App
