document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = document.getElementById("navbarNav");
    const backdrop = document.querySelector(".backdrop");

    // Initialize collapse instance
    const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });

    function openMenu() {
        toggler.classList.remove("collapsed");
        toggler.setAttribute("aria-expanded", "true");
        collapse.classList.add("show");
        backdrop.classList.add("show");
        document.body.style.overflow = "hidden"; // prevent background scroll
    }

    function closeMenu() {
        toggler.classList.add("collapsed");
        toggler.setAttribute("aria-expanded", "false");
        collapse.classList.remove("show");
        backdrop.classList.remove("show");
        document.body.style.overflow = ""; // restore scroll
    }

    toggler.addEventListener("click", function () {
        if (collapse.classList.contains("show")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    backdrop.addEventListener("click", closeMenu);

    // Close menu on nav link click (mobile)
    const navLinks = collapse.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                closeMenu();
            }
        });
    });

    // Accessibility: close menu on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && collapse.classList.contains("show")) {
            closeMenu();
        }
    });
});
