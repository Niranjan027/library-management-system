import React, { useState } from "react";

function AddBook({ addBook, role }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    quantity: ""
  });

  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook({ title: "", author: "", category: "", quantity: "" });
  };

  if (role !== "ADMIN") {
    return null;
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
      />

      <input
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        value={book.category}
        onChange={handleChange}
      />

      <input
        name="quantity"
        type="number"
        placeholder="Qty"
        value={book.quantity}
        onChange={handleChange}
      />

      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
