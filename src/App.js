import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BookStatus from "./pages/BookStatus";
import Generous from "./pages/Generous";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import booksData from "./data/BookData";
import "./styles/App.css";

/* ---------- Helper: add 1 month ---------- */
const addOneMonth = (date) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  return d.toISOString().split("T")[0];
};

function App() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState("home");
  const [books, setBooks] = useState(booksData);

  /* ---------- Borrow Book ---------- */
  const borrowBook = (id) => {
    const today = new Date().toISOString().split("T")[0];

    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id && book.available
          ? {
              ...book,
              available: false,
              borrowedBy: user.username,
              endDate: addOneMonth(today),
            }
          : book
      )
    );
  };

  /* ---------- Login First ---------- */
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <Sidebar
        open={sidebarOpen}
        setPage={setPage}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="content">
        {page === "home" && (
          <Home books={books} user={user} borrowBook={borrowBook} />
        )}

        {page === "status" && (
          <BookStatus books={books} user={user} />
        )}

        {page === "generous" && <Generous />}

        {page === "profile" && <Profile user={user} />}
      </div>
    </>
  );
}

export default App;
