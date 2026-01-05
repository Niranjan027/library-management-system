import { useState } from "react";
import AuthNavbar from "../components/AuthNavbar";
import "../styles/App.css";

function Login({ setUser }) {
  const [isRegister, setIsRegister] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    card: "",
    role: "USER"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ---------- VALIDATIONS ---------- */
  const isValidName = /^[A-Za-z ]+$/.test(form.name);
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.email);
  const isValidCard = /^[0-9]{6,10}$/.test(form.card);

  const handleRegister = () => {
    if (!isValidName)
      return alert("Name must contain letters only");

    if (!isValidEmail)
      return alert("Email must be a valid Gmail address");

    if (!form.password || !form.card)
      return alert("All fields are required");

    if (!isValidCard)
      return alert("Library card must be 6–10 digits");

    alert("Registration Successful! Please login.");
    setIsRegister(false);
  };

  const handleLogin = () => {
    if (!form.name || !form.email)
      return alert("Please enter username and email");

    setUser({
      username: form.name,
      role: form.role
    });
  };

  return (
    <div className="auth-bg">
      <AuthNavbar isRegister={isRegister} setIsRegister={setIsRegister} />

      <div className="auth-box">
        <h2>{isRegister ? "Register" : "Login"}</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Gmail"
          onChange={handleChange}
        />

        {isRegister && (
          <>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              name="card"
              placeholder="Library Card Number"
              onChange={handleChange}
            />
          </>
        )}

        <select name="role" onChange={handleChange}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button onClick={isRegister ? handleRegister : handleLogin}>
          {isRegister ? "Register" : "Login"}
        </button>

        {isRegister && (
          <p className="switch">
            Already have an account?
            <span onClick={() => setIsRegister(false)}> Login here</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
