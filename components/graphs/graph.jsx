import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default ({ chartData, title }) => {
  const canvasEl = useRef(null);

  const colors = {
    blue: {
      default: "rgba(2, 161, 240, 1)",
      half: "rgba(2, 161, 240, 0.5)",
      quarter: "rgba(2, 161, 240, 0.25)",
      zero: "rgba(2, 161, 240, 0)",
    },
    green: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.blue.half);
    gradient.addColorStop(0.65, colors.blue.quarter);
    gradient.addColorStop(1, colors.blue.zero);

    const data = {
      labels: chartData.labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: title,
          data: chartData.data,
          fill: true,
          borderWidth: 2,
          borderColor: colors.blue.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.blue.default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, [title, chartData]);

  return (
    <div>
      <span className="font-bold text-xl h-text">{title}</span>
      <canvas id="myChart" ref={canvasEl} height="150" />
    </div>
  );
};
