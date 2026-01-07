function AuthNavbar({ isRegister, setIsRegister }) {
  return (
    <div className="auth-navbar">
      {/* LEFT SIDE → TITLE */}
      <div className="auth-right">
        {/*📚 Library Management System*/}
      </div>

      {/* RIGHT SIDE → LOGIN / REGISTER */}
      <div className="auth-left">
        <span
          className={!isRegister ? "active" : ""}
          onClick={() => setIsRegister(false)}
        >
          {/*Login*/}
        </span>
        <span
          className={isRegister ? "active" : ""}
          onClick={() => setIsRegister(true)}
        >
          {/*Register*/}
        </span>
      </div>
    </div>
  );
}

export default AuthNavbar;
