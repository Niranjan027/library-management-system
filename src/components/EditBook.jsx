import React, { useState } from "react";

function EditBook({ book, updateBook, cancel }) {
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleChange = (e) =>
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });

  return (
    <tr>
      <td><input name="title" value={updatedBook.title} onChange={handleChange} /></td>
      <td><input name="author" value={updatedBook.author} onChange={handleChange} /></td>
      <td><input name="category" value={updatedBook.category} onChange={handleChange} /></td>
      <td><input name="quantity" value={updatedBook.quantity} onChange={handleChange} /></td>
      <td>
        <button onClick={() => updateBook(updatedBook)}>Save</button>
        <button onClick={cancel}>Cancel</button>
      </td>
    </tr>
  );
}

export default EditBook;
