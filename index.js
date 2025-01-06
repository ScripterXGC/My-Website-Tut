// Function to open the dialog
function openDialog() {
    document.getElementById("dialog").style.display = "flex";
}

// Function to close the dialog
function closeDialog() {
    document.getElementById("dialog").style.display = "none";
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});
