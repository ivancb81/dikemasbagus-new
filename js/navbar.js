// document.addEventListener("DOMContentLoaded", function () {
//     const navbarToggler = document.querySelector(".navbar-toggler");
//     const closeIcon = navbarToggler?.querySelector(".close-icon");
//     const hamburgerIcon = navbarToggler?.querySelector(".navbar-toggler-icon");
//     const collapseElement = document.getElementById("navbarSupportedContent");

//     console.log("Element status:", {
//         toggler: !!navbarToggler,
//         closeIcon: !!closeIcon,
//         hamburgerIcon: !!hamburgerIcon,
//     });

//     if (navbarToggler && closeIcon && hamburgerIcon && collapseElement) {
//         hamburgerIcon.style.display = "inline-block";
//         closeIcon.style.display = "none";

//         //closeIcon.style.transition = "opacity 0.2s";
//         //hamburgerIcon.style.transition = "opacity 0.2s";

//         collapseElement.addEventListener("shown.bs.collapse", () => {
//             hamburgerIcon.style.opacity = "0";
//             setTimeout(() => {
//                 hamburgerIcon.style.display = "none";
//                 closeIcon.style.display = "inline-block";
//                 closeIcon.style.opacity = "1";
//             }, 100);
//         });

//         collapseElement.addEventListener("hidden.bs.collapse", () => {
//             closeIcon.style.opacity = "0";
//             setTimeout(() => {
//                 closeIcon.style.display = "none";
//                 hamburgerIcon.style.display = "inline-block";
//                 hamburgerIcon.style.opacity = "1";
//             }, 100);
//         });
//     } else {
//         console.error("Required elements not found");
//     }
// });

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
