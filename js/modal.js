// Ambil elemen modal dan kontennya
const portfolioModal = document.getElementById("portfolioModal");
const modalTitle = portfolioModal.querySelector(".modal-title");
const modalImage = document.getElementById("modalImage");

// Event listener untuk setiap portfolio-item
document.querySelectorAll(".portfolio-item").forEach((item) => {
    item.addEventListener("click", () => {
        // Ambil data dari atribut data-*
        const imgSrc = item.getAttribute("data-img");
        const titleText = item.getAttribute("data-title");

        // Set konten modal
        modalTitle.textContent = titleText;
        modalImage.src = imgSrc;
        modalImage.alt = titleText;
    });
});
