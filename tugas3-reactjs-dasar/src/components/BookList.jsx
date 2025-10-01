import React from "react";

const BookList = ({ books, showHeader = false }) => {
  return (
    <div className="container my-4">
      {showHeader && (
        <div className="text-center mb-3">
          <button
            className="btn btn-primary mt-2"
            data-bs-toggle="modal"
            data-bs-target="#addBookModal"
          >
            + Tambah Buku
          </button>
        </div>
      )}

      <div className="row">
        {books.map((book, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              {book.image && (
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Year:</strong> {book.year}</p>
                <p className="text-muted">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
