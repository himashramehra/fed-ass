import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TabContent from "./TabContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        <TabContent activeTab={activeTab} />
      </main>
    </div>
  );
};

export default Dashboard;
