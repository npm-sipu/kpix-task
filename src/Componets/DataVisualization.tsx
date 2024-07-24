import React from "react";
import Cards from "./Cards";

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
      className=' overflow-scroll'
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        height: "calc(100vh - 128px)",
      }}
    >
      <div className='p-4'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card) => (
            <div key={card.id}>
              <Cards />
            </div>
          ))}
        </div>
      </div>
    </div>
    // <Cards />
  );
};

export default DataVisualization;
