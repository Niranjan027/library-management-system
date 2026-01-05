function BookStatus({ books, user }) {
  const borrowedBooks = books.filter(
    book => book.borrowedBy === user.username
  );

  return (
    <div className="page">
      <h2>Your Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No books borrowed yet.</p>
      ) : (
        borrowedBooks.map(book => (
          <p key={book.id}>
            📘 {book.title} – Due: {book.endDate}
          </p>
        ))
      )}
    </div>
  );
}

export default BookStatus;
