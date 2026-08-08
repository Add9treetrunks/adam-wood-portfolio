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

        // Smooth scrolling with menu close
        document.querySelectorAll('#main-nav a').forEach(link => {

            link.addEventListener("click", function (e) {

                e.preventDefault();

                const target = document.querySelector(this.getAttribute("href"));

                // Close the mobile menu first
                nav.classList.remove("active");

                // Wait for the menu to collapse, then scroll
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }, 1);

            });

        });

    }

});