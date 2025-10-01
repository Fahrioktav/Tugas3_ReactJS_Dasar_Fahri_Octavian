import React, { useState } from "react";
import BookList from "../components/BookList";

const Books = ({ books, setBooks }) => {
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSaveBook = () => {
    if (!newBook.title || !newBook.author || !newBook.year) return;
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
    setNewBook({ title: "", author: "", year: "", description: "" });
    const modalEl = document.getElementById("addBookModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  };

  return (
    <div>
      <h1 className="text-center my-4">Daftar Buku</h1>
      <BookList books={books} showHeader={true} />

      {/* Modal Tambah Buku */}
      <div className="modal fade" id="addBookModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Tambah Buku</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control mb-2" name="title" placeholder="Judul Buku"
                value={newBook.title} onChange={handleChange} />
              <input type="text" className="form-control mb-2" name="author" placeholder="Penulis"
                value={newBook.author} onChange={handleChange} />
              <input type="text" className="form-control mb-2" name="year" placeholder="Tahun Terbit"
                value={newBook.year} onChange={handleChange} />
              <textarea className="form-control mb-2" name="description" placeholder="Deskripsi"
                value={newBook.description} onChange={handleChange} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
              <button type="button" className="btn btn-primary" onClick={handleSaveBook}>Simpan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
