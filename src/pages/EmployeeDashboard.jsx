import React, { useState } from "react";
import "../Style.css";

function EmployeeDashboard({ setAllLeaves, onLogout }) {
  const [leaves, setLeaves] = useState([]);
  const [leaveType, setLeaveType] = useState("Casual");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleApplyLeave = (e) => {
    e.preventDefault();
    const newLeave = { leaveType, startDate, endDate, reason, status: "Pending", role: "Employee" };
    setLeaves([...leaves, newLeave]);
    setAllLeaves(prev => [...prev, newLeave]);
    setLeaveType("Casual");
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  return (
    <div className="login-box">
      <h2 className="login-title">Employee Dashboard</h2>

      {/* Apply Leave Form */}
      <form onSubmit={handleApplyLeave}>
        <label>Leave Type:</label>
        <select className="login-input" value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
          <option>Casual</option>
          <option>Sick</option>
          <option>Other</option>
        </select>

        <label>Start Date:</label>
        <input type="date" className="login-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />

        <label>End Date:</label>
        <input type="date" className="login-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

        <label>Reason:</label>
        <textarea className="login-input" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason for leave" required />

        <button type="submit" className="login-btn" style={{ marginTop: "10px" }}>Apply Leave</button>
      </form>

      {/* Leaves Table */}
      {leaves.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Leave Requests:</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Type</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Start</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>End</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Reason</th>
                <th style={{ border: "1px solid #ccc", padding: "5px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.leaveType}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.startDate}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.endDate}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.reason}</td>
                  <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Logout button at bottom */}
      <button 
        onClick={onLogout} 
        className="login-btn" 
        style={{ marginTop: "20px", backgroundColor:"#068959" }}
      >
        Logout
      </button>
    </div>
  );
}

export default EmployeeDashboard;
