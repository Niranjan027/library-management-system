import BookCard from "./BookCard";

function BookGrid({ books, user, borrowBook }) {
  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          user={user}
          borrowBook={borrowBook}
        />
      ))}
    </div>
  );
}

export default BookGrid;
