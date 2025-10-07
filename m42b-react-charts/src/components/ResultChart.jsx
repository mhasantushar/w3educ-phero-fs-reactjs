import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultsData = [
  {
    id: "S1",
    name: "John Doe",
    Science: 85,
    Math: 78,
    Physics: 92,
    Chemistry: 88,
  },
  {
    id: "S2",
    name: "Jane Smith",
    Science: 72,
    Math: 80,
    Physics: 75,
    Chemistry: 90,
  },
  {
    id: "S3",
    name: "Emily Johnson",
    Science: 95,
    Math: 85,
    Physics: 88,
    Chemistry: 91,
  },
  {
    id: "S4",
    name: "Michael Brown",
    Science: 78,
    Math: 69,
    Physics: 83,
    Chemistry: 85,
  },
  {
    id: "S5",
    name: "Sarah Davis",
    Science: 88,
    Math: 92,
    Physics: 85,
    Chemistry: 90,
  },
  {
    id: "S6",
    name: "David Wilson",
    Science: 70,
    Math: 76,
    Physics: 79,
    Chemistry: 84,
  },
  {
    id: "S7",
    name: "Olivia Martinez",
    Science: 82,
    Math: 74,
    Physics: 91,
    Chemistry: 89,
  },
  {
    id: "S8",
    name: "James Taylor",
    Science: 93,
    Math: 85,
    Physics: 80,
    Chemistry: 87,
  },
  {
    id: "S9",
    name: "Sophia Anderson",
    Science: 79,
    Math: 88,
    Physics: 92,
    Chemistry: 83,
  },
  {
    id: "S10",
    name: "Benjamin Thomas",
    Science: 84,
    Math: 81,
    Physics: 87,
    Chemistry: 90,
  },
];

const ResultChart = () => {
  return (
    <div>
      <h2>Line Chart</h2>

      <LineChart width={600} height={400} data={resultsData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="Math" stroke="#8884d8" />
        <Line type="monotone" dataKey="Science" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Physics" stroke="#ffc658" />
        <Line type="monotone" dataKey="Chemistry" stroke="#ff7300" /> 
      </LineChart>
    </div>
  );
};

export default ResultChart;
