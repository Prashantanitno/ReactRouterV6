import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";
import BooksRoutes from "./pages/BooksRoutes";

const RouteLearnAppJs1 = () => {
  return (
    <div>
      <Routes>
        <Route path="/books" element={<h1>Extra Element</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/books" element={<BookList />} />
  <Route path="/books/:id" element={<Book />} />
  <Route path="/books/new" element={<NewBook />} /> */}

        {/*-------------- Nesting Routing ------------------ */}
        {/* <Route path="/books" element={<BookLayout />}> */}
        <Route path="/books/*" element={<BooksRoutes />}></Route>
        <Route path="*" element={<NotFound />} />
        {/*-------------- Nesting Routing ------------------ */}

        {/* <Route path="/books/new" element={<About />} />
  <Route path="/books/new" element={<Contact />} />
  <Route path="/books/new" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default RouteLearnAppJs1;
