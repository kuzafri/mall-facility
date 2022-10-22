import React from "react";
import { Bar, Line } from "react-chartjs-2";

export const options = {
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Total User Registered",
    },
  },
  animation: {
    duration: 500
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [5, 2, 8, 4, 4, 3, 9, 7, 3, 7, 12, 5, 3],
      borderColor: "#196B79",
      backgroundColor: "#196B79",
    },
  ],
};

const AdminChart: React.FC = () => {
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default AdminChart;
