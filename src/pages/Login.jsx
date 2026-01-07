import { useState, useEffect } from "react";
import AuthNavbar from "../components/AuthNavbar";
import { createUser, getAllUsers } from "../services/api";
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
  const isValidPassword = form.password && form.password.length >= 6;

  const handleRegister = async () => {
    if (!isValidName) return alert("Name must contain letters only");
    if (!isValidEmail) return alert("Email must be a valid Gmail address");
    if (!isValidPassword) return alert("Password must be at least 6 characters");

    try {
      await createUser({ name: form.name, email: form.email, password: form.password });
      alert("Registration Successful! Please login.");
      setIsRegister(false);
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed: " + error.message);
    }
  };

  const handleLogin = async () => {
    if (!form.email || !form.password)
      return alert("Please enter email and password");

    try {
      const users = await getAllUsers();
      // SECURITY NOTE: In a real app, do NOT check passwords on client side.
      // Send credentials to backend and get a token. 
      // This is a temporary demo implementation.
      const user = users.find(u => u.email === form.email && u.password === form.password);

      if (user) {
        setUser({
          id: user.id,
          username: user.name,
          role: form.role
        });
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
    }
  };

  return (
    <div className="auth-bg">
      <AuthNavbar isRegister={isRegister} setIsRegister={setIsRegister} />

      <div className="auth-box">
        <h2>{isRegister ? "Register" : "Login"}</h2>

        {isRegister && (
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        )}

        <input
          name="email"
          placeholder="Gmail"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        {isRegister && (
          <input
            name="card"
            placeholder="Library Card Number"
            onChange={handleChange}
          />
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
