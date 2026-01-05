function Sidebar({ open, setPage, closeSidebar }) {
  const handleClick = (pageName) => {
    setPage(pageName);
    closeSidebar();   // 👈 AUTO HIDE
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <p onClick={() => handleClick("home")}>🏠 Home</p>
      <p onClick={() => handleClick("status")}>📖 Book Status</p>
      <p onClick={() => handleClick("generous")}>🤝 Generous</p>
      <p onClick={() => handleClick("profile")}>👤 Profile</p>
    </div>
  );
}

export default Sidebar;
