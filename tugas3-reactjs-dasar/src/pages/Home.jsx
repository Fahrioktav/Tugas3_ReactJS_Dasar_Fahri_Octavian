import React from "react";
import BookList from "../components/BookList";

const Home = ({ books }) => {
  return (
    <div>
      <h1 className="text-center my-4">Daftar Buku</h1>
      <BookList books={books} showHeader={false} />
    </div>
  );
};

export default Home;
