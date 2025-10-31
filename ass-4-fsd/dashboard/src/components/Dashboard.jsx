import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TabContent from "./TabContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="dashboard">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main">
        <TabContent activeTab={activeTab} />
      </main>
    </div>
  );
};

export default Dashboard;
