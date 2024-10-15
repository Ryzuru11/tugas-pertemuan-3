document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("performanceChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Winter", "Spring", "Summer", "Autumn"],
      datasets: [
        {
          label: "Dev team",
          data: [30, 70, 90, 40],
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Design team",
          data: [40, 50, 60, 70],
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
        },
      },
    },
  });
});
