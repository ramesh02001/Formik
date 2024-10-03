import React from 'react';
import BookManagement from './components/BookManagement';
import AuthorManagement from './components/AuthorManagement';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Library Management Dashboard</h1>
      <div className="management-section">
        <BookManagement />
        <AuthorManagement />
      </div>
    </div>
  );
}

export default App;
