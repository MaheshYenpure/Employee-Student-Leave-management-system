import React, { useState, useEffect } from "react";
import "../Style.css";

function AdminDashboard({ allLeaves }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setLeaves(allLeaves);
  }, [allLeaves]);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...leaves];
    updated[index].status = newStatus;
    setLeaves(updated);
  };

  return (
    <div className="login-box">
      <h2 className="login-title">Admin Dashboard</h2>

      {leaves.length === 0 ? (
        <p>No leave requests yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "5px" }}>Role</th>
              <th style={{ border: "1px solid #ccc", padding: "5px" }}>Type</th>
              <th style={{ border: "1px solid #ccc", padding: "5px" }}>Start</th>
              <th style={{ border: "1px solid #ccc", padding: "5px" }}>End</th>
              <th style={{ border: "1px solid #ccc", padding: "5px" }}>Reason</th>
              <th style={{ border: "1px solid #ccc", padding: "5px" }}>Status</th>
              <th style={{ border: "1px solid #ccc", padding: "5px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.role}</td>
                <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.leaveType}</td>
                <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.startDate}</td>
                <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.endDate}</td>
                <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.reason}</td>
                <td style={{ border: "1px solid #ccc", padding: "5px" }}>{leave.status}</td>
                <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                  <button onClick={() => handleStatusChange(index, "Approved")} className="login-btn" style={{ marginRight: "5px" }}>Approve</button>
                  <button onClick={() => handleStatusChange(index, "Rejected")} className="login-btn" style={{ backgroundColor: "#ff4d4d" }}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;
