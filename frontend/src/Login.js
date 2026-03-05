import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Load saved username
  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {

      const response = await axios.post(
        "https://login-app-application.onrender.com/login",
        {
          username,
          password
        }
      );

      if (response.status === 200) {
        localStorage.setItem("username", username);
        window.location.href = "/welcome";
      }

    } catch (err) {

      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Server not reachable. Please try again.");
      }

    }
  };

  return (
    <div className="container">
      <div className="login-box">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

        </form>

        {error && <p className="error">{error}</p>}

      </div>
    </div>
  );
}

export default Login;