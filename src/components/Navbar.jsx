import { Menu } from 'lucide-react';

function Navbar({ toggleSidebar }) {
  return (
    <div
      className="navbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        color: 'black',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={toggleSidebar}
          style={{
            background: 'transparent',
            border: 'none',
            borderRadius: '8px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Menu size={24} color="black" />
        </button>
      </div>

      <h1 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: 0 }}>Library Management System</h1>
    </div>
  );
}

export default Navbar;
