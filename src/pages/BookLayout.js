import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });

  const number = searchParams.get("n");

  return (
    <div>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Link to={`/books/${number} `}>Book {number}</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      {/* ----->  what ever we give in this outlet we can access in this above route */}
      <Outlet context={{ hello: "world" }} />

      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </div>
  );
};

export default BookLayout;
