import React from "react";
import { Link, Outlet } from "react-router-dom";

const BookLayout = () => {
  return (
    <div>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      {/* ----->  what ever we give in this outlet we can access in this above route */}
      <Outlet context={{ hello: "world" }} />
    </div>
  );
};

export default BookLayout;
