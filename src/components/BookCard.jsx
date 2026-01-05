function BookCard({ book, user, borrowBook, renewBook }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />

      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>

        {/* AVAILABLE BOOK */}
        {book.available ? (
          user.role === "USER" && (
            <button
              className="add-btn"
              onClick={() => borrowBook(book.id)}
              title="Borrow Book"
            >
              Borrow (1 Month)
            </button>
          )
        ) : (
          <>
            {/* BORROWED INFO */}
            <p className="borrowed">
              Borrowed by: {book.borrowedBy}
            </p>

            <p className="due">
              Due Date: {book.endDate}
            </p>

            {/* RENEW ONLY BY SAME USER */}
            {book.borrowedBy === user.username && (
              <button
                className="renew-btn"
                onClick={() => renewBook(book.id)}
              >
                Renew (+1 Month)
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BookCard;
