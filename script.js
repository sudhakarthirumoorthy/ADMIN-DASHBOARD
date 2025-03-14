// Get the canvas element
const ctx = document.getElementById('patientChart').getContext('2d');

// Sample Data for Patients (Replace with dynamic data if needed)
const patientData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Admitted Patients",
            data: [50, 70, 60, 90, 85, 100],
            backgroundColor: "rgba(0, 0, 255, 0.6)", // Blue
            borderColor: "blue",
            borderWidth: 1
        },
        {
            label: "Discharged Patients",
            data: [30, 50, 55, 80, 70, 95],
            backgroundColor: "rgba(0, 255, 0, 0.6)", // Green
            borderColor: "green",
            borderWidth: 1
        }
    ]
};

// Chart Configuration
const config = {
    type: 'bar', // Changed from 'line' to 'bar'
    data: patientData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Hospital Admissions & Discharges'
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
