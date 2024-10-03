import React, { useState } from 'react';
import BookForm from './BookForm';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleEditBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.isbn === updatedBook.isbn ? updatedBook : book
    );
    setBooks(updatedBooks);
    setEditingBook(null);
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  return (
    <div>
      <h2>Book Management</h2>
      {editingBook ? (
        <BookForm initialValues={editingBook} onSubmit={handleEditBook} />
      ) : (
        <BookForm
          initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
          onSubmit={handleAddBook}
        />
      )}
      <ul>
  {books.map((book) => (
    <li key={book.isbn} className="book-item">
      <div className="book-details">
        <strong>Title: </strong>{book.title}<br />
        <strong>Author: </strong>{book.author}<br/>  
        <strong className="isbn">ISBN:</strong> {book.isbn}
      </div>
      <div className="book-actions">
        <button onClick={() => setEditingBook(book)} className="edit-button">Edit</button>
        <button onClick={() => handleDeleteBook(book.isbn)} className="delete-button">Delete</button>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default BookManagement;
