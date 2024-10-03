import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

const AuthorManagement = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const handleEditAuthor = (updatedAuthor) => {
    const updatedAuthors = authors.map((author) =>
      author.name === updatedAuthor.name ? updatedAuthor : author
    );
    setAuthors(updatedAuthors);
    setEditingAuthor(null);
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter((author) => author.name !== name));
  };

  return (
    <div>
      <h2>Author Management</h2>
      {editingAuthor ? (
        <AuthorForm initialValues={editingAuthor} onSubmit={handleEditAuthor} />
      ) : (
        <AuthorForm
          initialValues={{ name: '', birthDate: '', biography: '' }}
          onSubmit={handleAddAuthor}
        />
      )}
      <ul>
  {authors.map((author) => (
    <li key={author.name} className="author-item">
      <div className="author-details">
        <strong>AuthorName: </strong>{author.name}<br/>
         (Born: {author.birthDate})<br/>
         <strong>Biography: </strong>{author.biography}
      </div>
      <div className="author-actions">
        <button onClick={() => setEditingAuthor(author)} className="edit-button">Edit</button>
        <button onClick={() => handleDeleteAuthor(author.name)} className="delete-button">Delete</button>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default AuthorManagement;
