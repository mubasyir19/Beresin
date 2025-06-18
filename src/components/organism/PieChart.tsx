"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data: ChartData<"doughnut"> = {
    labels: ["NOT_STARTED", "IN_PROGRESS", "ON_HOLD", "DONE"],
    datasets: [
      {
        label: "Project Status",
        data: [10, 5, 15, 1],
        backgroundColor: [
          "oklch(63.7% 0.237 25.331)",
          "oklch(79.5% 0.184 86.047)",
          "oklch(71.5% 0.143 215.221)",
          "oklch(69.6% 0.17 162.48)",
        ],
        borderColor: [
          "rgb(239, 68, 68)",
          "oklch(79.5% 0.184 86.047)",
          "oklch(71.5% 0.143 215.221)",
          "oklch(69.6% 0.17 162.48)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Distribusi Status Proyek",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
