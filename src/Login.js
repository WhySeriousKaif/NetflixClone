import React, { useState } from "react";
import { auth } from "./firebase"; // Ensure you have initialized Firebase
import "./Login.css"; // Create this CSS file for styling
import Nav from "./Nav"; // Import Nav component

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Login successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Nav /> {/* Add Nav component */}
      <div className="login">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="login-options">
          <p>
            New to Netflix? <a href="/signup">Sign Up now</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
