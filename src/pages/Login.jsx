import React, { useState } from "react";
import "../Style.css";

function Login({ onSelectDashboard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState("employee"); // employee/student/admin

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isRegister ? "Registered" : "Logged in"}!\nEmail: ${email}\nPassword: ${password}\nRole: ${role}`);
    onSelectDashboard(role); // navigate to dashboard
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-box">
      <h2 className="login-title">{isRegister ? "Register" : "Login"}</h2>

      {/* Role selector */}
      <div style={{ marginBottom: "15px" }}>
        <label>
          <input type="radio" value="employee" checked={role === "employee"} onChange={() => setRole("employee")} /> Employee
        </label>{" "}
        <label>
          <input type="radio" value="student" checked={role === "student"} onChange={() => setRole("student")} /> Student
        </label>{" "}
        <label>
          <input type="radio" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} /> Admin
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="login-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      <p className="toggle-text">
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <span onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Register"}
        </span>
      </p>
    </div>
  );
}

export default Login;
