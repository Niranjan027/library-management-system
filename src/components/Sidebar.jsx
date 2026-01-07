import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Heart, User, X } from 'lucide-react';

function Sidebar({ open, closeSidebar }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    margin: '4px 8px',
    borderRadius: '8px',
    color: isActive(path) ? 'white' : 'var(--text-muted)',
    background: isActive(path) ? 'var(--primary)' : 'transparent',
    transition: 'all 0.2s',
    cursor: 'pointer',
    fontWeight: isActive(path) ? '600' : '400'
  });

  return (
    <>
      <div
        className={`sidebar ${open ? "open" : ""}`}
        style={{
          width: '260px',
          height: '100vh',
          background: 'var(--surface)',
          padding: '24px 0',
          position: 'fixed',
          left: open ? '0' : '-260px',
          top: '0',
          zIndex: 1000,
          transition: 'left 0.3s ease',
          borderRight: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ padding: '0 24px 32px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>LibraryOS</h2>
          <button
            onClick={closeSidebar}
            style={{ background: 'none', color: 'var(--text-muted)', display: 'block', md: { display: 'none' } }}
            className="close-btn"
          >
            <X size={20} />
          </button>
        </div>

        <div style={{ flex: 1 }}>
          <Link to="/" style={linkStyle("/")} onClick={closeSidebar}>
            <Home size={20} /> Home
          </Link>
          <Link to="/status" style={linkStyle("/status")} onClick={closeSidebar}>
            <BookOpen size={20} /> My Books
          </Link>
          <Link to="/generous" style={linkStyle("/generous")} onClick={closeSidebar}>
            <Heart size={20} /> Donate
          </Link>
          <Link to="/profile" style={linkStyle("/profile")} onClick={closeSidebar}>
            <User size={20} /> Profile
          </Link>
          <Link to="/admin" style={linkStyle("/admin")} onClick={closeSidebar}>
            <User size={20} /> Admin Dashboard
          </Link>
        </div>

        <div style={{ padding: '24px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © 2026 LibraryOS<br />v2.0.0
          </p>
        </div>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="overlay"
          onClick={closeSidebar}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            display: 'none' // Hidden on desktop by default via CSS media queries if we had them, manually handling here mainly for logic
          }}
        />
      )}
    </>
  );
}

export default Sidebar;
