import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import BookStatus from "./pages/BookStatus";
import Generous from "./pages/Generous";
import Profile from "./pages/Profile";
import BookDetails from "./pages/BookDetails";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import { getAllBooks, borrowBook as apiBorrowBook } from "./services/api";
import "./styles/App.css";



function App() {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default open for better UI
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };

  /* ---------- Borrow Book ---------- */
  const borrowBook = async (id) => {
    try {
      await apiBorrowBook(id, user.id);
      fetchBooks(); // Refresh list
      alert("Book borrowed successfully for 1 month!");
    } catch (error) {
      console.error("Failed to borrow book", error);
      alert("Failed to borrow book");
    }
  };

  /* ---------- Login First ---------- */
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Router>
      <div className="app-container">
        <Sidebar
          open={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />

        <div className="content" style={{ marginLeft: sidebarOpen ? '260px' : '0' }}>
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <Routes>
            <Route path="/" element={<Home books={books} user={user} borrowBook={borrowBook} />} />
            <Route path="/status" element={<BookStatus books={books} user={user} />} />
            <Route path="/generous" element={<Generous />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/book/:id" element={<BookDetails user={user} />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
