import React, { useState } from "react";
import EditBook from "./EditBook";

function BookList({ books, role, deleteBook, updateBook }) {
  const [editIndex, setEditIndex] = useState(null);

  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Qty</th>
          {role === "ADMIN" && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) =>
          editIndex === index ? (
            <EditBook
              key={index}
              book={book}
              updateBook={(updated) => {
                updateBook(index, updated);
                setEditIndex(null);
              }}
              cancel={() => setEditIndex(null)}
            />
          ) : (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.quantity}</td>
              {role === "ADMIN" && (
                <td>
                  <button onClick={() => setEditIndex(index)}>Edit</button>
                  <button onClick={() => deleteBook(index)}>Delete</button>
                </td>
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default BookList;
