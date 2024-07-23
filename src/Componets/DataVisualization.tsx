import React from "react";

const DataVisualization: React.FC = () => {
  const cards = [
    {
      id: 1,
      name: "PMT-2020",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 2,
      name: "PMT-2021",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 3,
      name: "PMT-2022",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 4,
      name: "PMT-2020",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 5,
      name: "PMT-2021",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 6,
      name: "PMT-2022",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 7,
      name: "PMT-2020",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 8,
      name: "PMT-2021",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 9,
      name: "PMT-2022",
      status: "Connected",
      location: "Salt Lake City",
    },
    {
      id: 10,
      name: "PMT-2023",
      status: "Disconnected",
      location: "New York",
    },
    {
      id: 11,
      name: "PMT-2024",
      status: "Connected",
      location: "Los Angeles",
    },
    {
      id: 12,
      name: "PMT-2025",
      status: "Disconnected",
      location: "Chicago",
    },
    {
      id: 13,
      name: "PMT-2026",
      status: "Connected",
      location: "Houston",
    },
    {
      id: 14,
      name: "PMT-2027",
      status: "Disconnected",
      location: "Phoenix",
    },
    {
      id: 15,
      name: "PMT-2028",
      status: "Connected",
      location: "Philadelphia",
    },
    {
      id: 16,
      name: "PMT-2029",
      status: "Connected",
      location: "San Antonio",
    },
    {
      id: 17,
      name: "PMT-2030",
      status: "Disconnected",
      location: "San Diego",
    },
    {
      id: 18,
      name: "PMT-2031",
      status: "Connected",
      location: "Dallas",
    },
    {
      id: 19,
      name: "PMT-2032",
      status: "Disconnected",
      location: "San Jose",
    },
    {
      id: 20,
      name: "PMT-2033",
      status: "Connected",
      location: "Austin",
    },
  ];

  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-scroll gap-4 px-4'
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        height: "calc(100vh - 128px)",
      }}
    >
      {cards.map((card) => (
        <div key={card.id} className='bg-white rounded-lg shadow-md px-4'>
          <h3 className='text-xl font-semibold'>{card.name}</h3>
          <p>Status: {card.status}</p>
          <p>Location: {card.location}</p>
          <div className='flex justify-between mt-4'>
            <button className='bg-blue-500 text-white py-1 px-4 rounded'>
              Live Data
            </button>
            <button className='bg-blue-500 text-white py-1 px-4 rounded'>
              Historical Data
            </button>
            <button className='bg-blue-500 text-white py-1 px-4 rounded'>
              Live Alerts
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataVisualization;
