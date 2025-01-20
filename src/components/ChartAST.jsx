import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../assets/ASTcss/Agency.css";
import "../assets/ASTcss/AgencyMobile.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const YearlyStatsChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Yearly Stats",
        data: [600, 750, 850, 900, 950, 850, 900, 800, 850, 950, 1050, 1100],
        borderColor: "#1A73E8",
        backgroundColor: "rgba(26, 115, 232, 0.2)",
        tension: 0.4, // For smooth curves
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
      },
      y: {
        grid: {
          color: "#E5E7EB", // Light gray grid lines
        },
        min: 600,
        max: 1100,
        ticks: {
          stepSize: 100, // Custom step size for y-axis
        },
      },
    },
  };

  return (
    <div className="chart-body">
      <div className="chart-header" >
        <h2>Order Stats</h2>
        <p>#245,479</p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default YearlyStatsChart;
