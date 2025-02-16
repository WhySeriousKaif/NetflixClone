import React, { useState } from "react";
import { auth } from "./firebase"; // Ensure you have initialized Firebase
import "./Signup.css"; // Create this CSS file for styling
import Nav from "./Nav"; // Import Nav component

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Nav /> {/* Add Nav component */}
      <div className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
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
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-options">
          <p>
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
