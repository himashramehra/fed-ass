import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 1200 },
  { name: "May", users: 900 },
  { name: "Jun", users: 1500 },
];

const TabContent = ({ activeTab }) => {
  const animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  switch (activeTab) {
    case "overview":
      return (
        <motion.div {...animation} className="text-xl font-semibold">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">📊 Dashboard Overview</h2>
          <p className="text-gray-700">Welcome to your personalized dashboard. Check quick stats and updates here.</p>
        </motion.div>
      );

    case "profile":
      return (
        <motion.div {...animation}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">👤 Profile</h2>
          <form className="space-y-4 max-w-md">
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded-md" />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded-md" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
          </form>
        </motion.div>
      );

    case "analytics":
      return (
        <motion.div {...animation}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">📈 Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      );

    case "settings":
      return (
        <motion.div {...animation}>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">⚙️ Settings</h2>
          <p className="text-gray-700">Manage preferences and privacy controls.</p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Logout
          </button>
        </motion.div>
      );

    default:
      return <div>Select a tab to view content.</div>;
  }
};

export default TabContent;
