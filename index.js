document.addEventListener("DOMContentLoaded", () => {
    // Dark mode toggle
    const darkToggle = document.getElementById("dark-mode-toggle");
    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
