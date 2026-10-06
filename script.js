// Portfolio JavaScript

console.log("Ritesh Portfolio Loaded Successfully!");

// Automatically update footer year
document.addEventListener("DOMContentLoaded", function () {
    const year = new Date().getFullYear();
    const footerYear = document.getElementById("year");

    if (footerYear) {
        footerYear.textContent = year;
    }
});