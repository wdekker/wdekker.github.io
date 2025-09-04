/**
 * Mobile Menu Toggle Functionality
 * Handles hamburger menu interactions and accessibility
 */

function toggleMobileMenu() {
    const nav = document.getElementById("mobile-nav");
    const toggle = document.querySelector(".menu-toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");

    // Update ARIA attributes for accessibility
    const isExpanded = nav.classList.contains("active");
    toggle.setAttribute("aria-expanded", isExpanded);
}

// Initialize mobile menu functionality when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    // Close menu when clicking on navigation links
    const navLinks = document.querySelectorAll("#mobile-nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            const nav = document.getElementById("mobile-nav");
            const toggle = document.querySelector(".menu-toggle");
            nav.classList.remove("active");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    // Close menu when clicking outside navigation area
    document.addEventListener("click", function (e) {
        const nav = document.getElementById("mobile-nav");
        const toggle = document.querySelector(".menu-toggle");

        // Check if click is outside both nav and toggle button
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove("active");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    // Close menu with Escape key for accessibility
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            const nav = document.getElementById("mobile-nav");
            const toggle = document.querySelector(".menu-toggle");
            nav.classList.remove("active");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
        }
    });

    // Initialize ARIA attributes
    const toggle = document.querySelector(".menu-toggle");
    if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
    }
});
