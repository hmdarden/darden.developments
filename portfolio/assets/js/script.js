
// HDarden Portfolio
// Project Filtering & Mobile Navigation

// Filter portfolio projects by category
function filterSelection(category) {
    const projects = document.querySelectorAll(".fltr");
    const buttons = document.querySelectorAll(".filter-buttons .btn");
    const dropdown = document.getElementById("filterDropdown");

    projects.forEach((project) => {
        const matchesCategory =
            category === "all" || project.classList.contains(category);

        if (matchesCategory) {
            project.style.display = "";
            project.classList.add("show");
        } else {
            project.style.display = "none";
            project.classList.remove("show");
        }
    });

    // Update active desktop filter button
    buttons.forEach((button) => {
        const onclick = button.getAttribute("onclick") || "";
        const match = onclick.match(/filterSelection\('([^']+)'\)/);
        const buttonCategory = match ? match[1] : "";

        const isActive = buttonCategory === category;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    // Keep mobile dropdown synchronized
    if (dropdown) {
        dropdown.value = category;
    }
}


// Toggle mobile navigation
function toggleNav() {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");

    if (!navLinks) return;

    const isOpen = navLinks.classList.toggle("active");

    // Supports navigation styles using the "show" class
    navLinks.classList.toggle("show", isOpen);

    if (hamburger) {
        hamburger.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    }
}


// Initialize portfolio functionality
document.addEventListener("DOMContentLoaded", () => {

    // Display all active projects when page loads
    filterSelection("all");

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.getElementById("nav-links");

    // Allow keyboard navigation for hamburger menu
    if (hamburger) {
        hamburger.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleNav();
            }
        });
    }

    // Close mobile menu when a navigation link is selected
    if (navLinks) {
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active", "show");

                if (hamburger) {
                    hamburger.classList.remove("active");
                    hamburger.setAttribute("aria-expanded", "false");
                }
            });
        });
    }
});
