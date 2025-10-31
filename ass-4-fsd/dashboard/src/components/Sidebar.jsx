import React from "react";
import { FaHome, FaUser, FaChartLine, FaCog } from "react-icons/fa";

const tabs = [
  { id: "overview", label: "Overview", icon: <FaHome /> },
  { id: "profile", label: "Profile", icon: <FaUser /> },
  { id: "analytics", label: "Analytics", icon: <FaChartLine /> },
  { id: "settings", label: "Settings", icon: <FaCog /> },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">User Dashboard</h2>
      <nav className="nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-button${activeTab === tab.id ? " active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
