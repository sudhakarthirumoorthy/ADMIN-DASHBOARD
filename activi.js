// Get the canvas element
const ctx = document.getElementById('hospitalChart').getContext('2d');

// Sample Data
const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Revenue ($ in thousands)",
            data: [120, 150, 180, 200, 250, 300],
            borderColor: "red",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderWidth: 2,
            fill: true
        },
        {
            label: "Medicines Sold (in units)",
            data: [400, 450, 500, 700, 800, 900],
            borderColor: "blue",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            fill: true
        },
        {
            label: "Medical Equipment Sold",
            data: [50, 80, 100, 120, 150, 200],
            borderColor: "green",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true
        }
    ]
};

// Chart Configuration
const config = {
    type: 'line', // Line Chart
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Monthly Revenue & Sales Data'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render Chart
new Chart(ctx, config);

