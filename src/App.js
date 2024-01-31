import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
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

function App() {
  let element = useRoutes([
    {
      path: "/",
      // element: <NavLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/books" element={<h1>Extra Element</h1>} />
        </Routes>
        <nav>
          <ul>
            <li>
              {/* reloadDocument:-> reload the entire document */}
              <NavLink to="/" reloadDocument>
                Home
              </NavLink>
              {/* <Link to="/" reloadDocument>
                Home
              </Link> */}
            </li>
            <li>
              <NavLink to="/books">Books</NavLink>
            </li>
          </ul>
        </nav>
        {/* ----------------> using the UseRoutes <---- */}
        {/* {element} */}
        {/* ----------------------- */}

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
    </>
  );
}

export default App;
