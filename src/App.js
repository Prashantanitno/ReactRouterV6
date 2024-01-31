import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
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
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />

        {/*-------------- Nesting Routing ------------------ */}
<Route>
  <Route index element={<BookList/>} />
  
</Route>
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/books/new" element={<About />} />
        <Route path="/books/new" element={<Contact />} />
        <Route path="/books/new" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
