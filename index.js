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

function server() {
	const weblink = 'https://discord.gg/2qstUBX5cv'
	window.open(weblink);
}

function invite() {
	const weblink = "https://discord.com/oauth2/authorize?client_id=1323840372371099720&permissions=1759218604441591&integration_type=0&scope=bot"
	window.open(weblink);
}
