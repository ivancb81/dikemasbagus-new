// Custom JavaScript to enhance tab accessibility and behavior if needed
// Bootstrap 5.3 handles tab switching automatically via data-bs-toggle attributes

// Example: Log tab changes (for debugging or analytics)
// const tabButtons = document.querySelectorAll('button[data-bs-toggle="tab"]');
// tabButtons.forEach((tab) => {
//     tab.addEventListener("shown.bs.tab", (event) => {
//         // event.target = newly activated tab
//         // event.relatedTarget = previous active tab
//         //console.log("Tab changed to:", event.target.textContent.trim());
//     });
// });
// Enable navigation between tabs using links inside tab content
document.querySelectorAll(".nav-to-tab").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetTabId = this.getAttribute("data-target");
        const targetTabEl = document.getElementById(targetTabId);
        if (targetTabEl) {
            const tabInstance = bootstrap.Tab.getOrCreateInstance(targetTabEl);
            tabInstance.show();
        }
    });
});
