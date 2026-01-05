function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      <h2>📚 Library Management System</h2>
    </div>
  );
}

export default Navbar;
