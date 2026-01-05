import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";
import booksData from "../data/BookData";

const addOneMonth = (date) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  return d.toISOString().split("T")[0];
};

function Dashboard({ user }) {
  const [books, setBooks] = useState(booksData);
  const [search, setSearch] = useState("");

  /* ---------- ADMIN FUNCTIONS ---------- */
  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now(), available: true }]);
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const updateBook = (index, updatedBook) => {
    const updated = [...books];
    updated[index] = updatedBook;
    setBooks(updated);
  };

  /* ---------- USER FUNCTIONS ---------- */
  const borrowBook = (id) => {
    const today = new Date().toISOString().split("T")[0];
    setBooks(
      books.map((b) =>
        b.id === id
          ? {
              ...b,
              available: false,
              borrowedBy: user.username,
              endDate: addOneMonth(today),
            }
          : b
      )
    );
  };

  const renewBook = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, endDate: addOneMonth(b.endDate) } : b
      )
    );
  };

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <p>
          <b>User:</b> {user.username} | <b>Role:</b> {user.role}
        </p>

        <SearchBar setSearch={setSearch} />

        {/* ADMIN VIEW */}
        {user.role === "ADMIN" && (
          <>
            <AddBook addBook={addBook} role={user.role} />
            <BookList
              books={filteredBooks}
              role={user.role}
              deleteBook={deleteBook}
              updateBook={updateBook}
            />
          </>
        )}

        {/* USER VIEW */}
        {user.role === "USER" && (
          <BookGrid
            books={filteredBooks}
            user={user}
            borrowBook={borrowBook}
            renewBook={renewBook}
          />
        )}
      </div>
    </>
  );
}

export default Dashboard;
