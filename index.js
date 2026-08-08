document.addEventListener("DOMContentLoaded", () => {

    // Dark mode toggle
    const darkToggle = document.getElementById("dark-mode-toggle");

    if (darkToggle) {
        darkToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            // Change button text depending on state
            if (document.body.classList.contains("dark-mode")) {
                darkToggle.textContent = "☀️ Toggle Light Mode";
            } else {
                darkToggle.textContent = "🌙 Toggle Dark Mode";
            }
        });
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            if (nav.classList.contains("active")) {
                // Closing: faster animation
                nav.classList.remove("active");
                nav.classList.add("closing");
                menuBtn.textContent = "☰ Menu";

                // Wait for transition to finish before cleaning up
                nav.addEventListener("transitionend", function handler(event) {
                    // Only clean up after the max-height transition ends
                    if (event.propertyName === "max-height") {
                        nav.classList.remove("closing");
                        nav.removeEventListener("transitionend", handler);
                    }
                });
            } else {
                // Opening: slower animation
                nav.classList.add("active");
                menuBtn.textContent = "✖ Close";
            }
        });

        // Smooth scrolling with menu close
        document.querySelectorAll("#main-nav a").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute("href"));

                // Only close menu if we're in mobile mode
                if (window.innerWidth < 768) {
                    nav.classList.remove("active");
                    menuBtn.textContent = "☰ Menu"; // reset button text
                    setTimeout(() => {
                        target.scrollIntoView({
                            behavior: "smooth"
                        });
                    }, 0);
                }
                else{
                    target.scrollIntoView({behavior: "smooth"});
                }

                
            });
        });

    }

});