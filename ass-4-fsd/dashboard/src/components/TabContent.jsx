import React, { useEffect, useState } from "react";
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

  const [profile, setProfile] = useState({ name: "", email: "" });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("profile");
      if (stored) {
        const parsed = JSON.parse(stored);
        setProfile({ name: parsed.name || "", email: parsed.email || "" });
      }
    } catch {
      setProfile({ name: "", email: "" });
    }
  }, []);

  const handleProfileChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  switch (activeTab) {
    case "overview":
      return (
        <motion.div {...animation} className="section">
          <h2 className="heading heading-blue">📊 Dashboard Overview</h2>
          {profile.name || profile.email ? (
            <p className="subtext">Welcome {profile.name ? profile.name : "there"}! {profile.email && `( ${profile.email} )`}</p>
          ) : (
            <p className="subtext">Welcome to your personalized dashboard. Check quick stats and updates here.</p>
          )}
        </motion.div>
      );

    case "profile":
      return (
        <motion.div {...animation} className="section">
          <h2 className="heading heading-blue">👤 Profile</h2>
          <form className="form" onSubmit={handleProfileSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input"
              value={profile.name}
              onChange={handleProfileChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              value={profile.email}
              onChange={handleProfileChange}
              required
            />
            <button className="btn btn-primary" type="submit">Save</button>
            {saved && <span className="subtext">Saved!</span>}
          </form>
        </motion.div>
      );

    case "analytics":
      return (
        <motion.div {...animation} className="section">
          <h2 className="heading heading-blue">📈 Analytics</h2>
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
        <motion.div {...animation} className="section">
          <h2 className="heading heading-blue">⚙️ Settings</h2>
          <p className="subtext">Manage preferences and privacy controls.</p>
          <button className="btn btn-danger spaced-top">
            Logout
          </button>
        </motion.div>
      );

    default:
      return <div className="section">Select a tab to view content.</div>;
  }
};

export default TabContent;
