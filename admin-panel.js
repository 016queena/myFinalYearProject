import React, { useState } from 'react';
import './admin-panel.css';
import adminLogo from './admin-logo.png';

function AdminDashboard() {
  const adminProfile = {
    name: 'Urooj Kanwal',
    position: 'Admin',
    department: 'Administration',
    email: 'admin@example.com',
    phone: '123456789',
  };

  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Panel</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="dashboard-content">
        <div className="profile">
          <h2>Admin Profile</h2>
          <div className="principal-logo"></div>
          <ul>
            <li>
              <strong>Name:</strong> {adminProfile.name}
            </li>
            <li>
              <strong>Position:</strong> {adminProfile.position}
            </li>
            <li>
              <strong>Department:</strong> {adminProfile.department}
            </li>
            <li>
              <strong>Email:</strong> {adminProfile.email}
            </li>
            <li>
              <strong>Phone:</strong> {adminProfile.phone}
            </li>
          </ul>
        </div>
        <nav className="dashboard-navigation">
          <ul>
            <li>Manage principal</li>
            <li>Manage teacher</li>
            <li>Manage student</li>
            <li>Manage parent</li>
            <li>Change settings</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminDashboard;
