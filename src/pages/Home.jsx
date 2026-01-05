import BookGrid from "../components/BookGrid";

function Home({ books, user, borrowBook }) {
  return (
    <div>
      <h2>📚 Available Books ({books.length})</h2>

      <BookGrid
        books={books}
        user={user}
        borrowBook={borrowBook}
      />
    </div>
  );
}

export default Home;
