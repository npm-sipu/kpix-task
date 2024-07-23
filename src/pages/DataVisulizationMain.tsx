import React, { useState } from "react";
import Sidebar from "../Componets/Sidebar";
import DataVisualization from "../Componets/DataVisualization";
import DataVisualizationTitle from "../Componets/DataVisualizationTitle";

const DataVisulizationMain: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex'>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow transition-all ${
          isSidebarOpen ? "ml-5" : "-ml-36"
        }`}
      >
        <DataVisualizationTitle />
        <DataVisualization />
      </div>
    </div>
  );
};

export default DataVisulizationMain;