import React, { useState } from "react";
import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import "./Style.css";

function App() {
  const [dashboard, setDashboard] = useState(null); // null / "employee" / "student" / "admin"
  const [allLeaves, setAllLeaves] = useState([]);   // All leaves for admin
  const handleLogout = () => {
    setDashboard(null); // Logout → login page wapas
  };

  return (
    <div>
      {!dashboard && <Login onSelectDashboard={setDashboard} />}
      {dashboard === "employee" && <EmployeeDashboard setAllLeaves={setAllLeaves} onLogout={handleLogout} />}
      {dashboard === "student" && <StudentDashboard setAllLeaves={setAllLeaves} onLogout={handleLogout} />}
      {dashboard === "admin" && <AdminDashboard allLeaves={allLeaves} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
