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
    <div className="w-64 bg-white shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold text-center py-6 border-b text-blue-600">User Dashboard</h2>
      <nav className="flex flex-col p-4 space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center space-x-3 p-3 rounded-md text-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-blue-500 text-white shadow-md"
                : "text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
