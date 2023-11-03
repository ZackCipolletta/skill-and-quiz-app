import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StackedBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Question 1', 'Question 2', 'Question 3'],
      datasets: [
        {
          label: 'Yes',
          data: [40, 30, 50],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: 'No',
          data: [60, 70, 50],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ],
    };

    const chartOptions = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 100,
          },
        },
      },
    };

    if (chartRef.current) {
      new Chart(chartRef.current, chartOptions);
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default StackedBarChart;
