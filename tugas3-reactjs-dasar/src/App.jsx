// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Book"; // pastikan namanya "Books.jsx"
import booksData from "./Utils/books";

function App() {
  const [books, setBooks] = useState(booksData);

  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark px-3">
        <Link to="/" className="navbar-brand">📚 BookSales</Link>
        <div>
          <Link to="/" className="btn btn-link text-light">Home</Link>
          <Link to="/books" className="btn btn-link text-light">Books</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/books" element={<Books books={books} setBooks={setBooks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
