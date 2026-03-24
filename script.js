let applicantCount = 0;

// Function 1: Form validation
function validateForm() {
    const age = document.getElementById("age").value;

    if (age < 18) {
        alert("You must be at least 18 to join the Empire.");
        return false;
    }

    applicantCount++;
    document.getElementById("counter").textContent = applicantCount;

    alert("Application submitted successfully!");
    return false;
}

// Function 2: Toggle dark mode
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Function 3: Page load message
window.onload = function () {
    console.log("Imperial recruitment system ready.");
};
