document.querySelectorAll(".portfolio-card").forEach((item) => {
    item.addEventListener("click", () => {
        const imgs = item.getAttribute("data-imgs").split(",");
        const title = item.getAttribute("data-title");
        const carouselInner = document.querySelector("#portfolioCarousel .carousel-inner");
        let carouselIndicators = document.querySelector("#portfolioCarousel .carousel-indicators");

        // Hapus isi carousel inner dan indikator lama jika ada
        carouselInner.innerHTML = "";
        if (carouselIndicators) {
            carouselIndicators.remove();
        }

        // Buat elemen indikator baru
        carouselIndicators = document.createElement("div");
        carouselIndicators.className = "carousel-indicators";

        imgs.forEach((img, index) => {
            // Buat slide carousel
            const slide = document.createElement("div");
            slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
            slide.innerHTML = `<img src="${img.trim()}" class="d-block w-100" alt="Slide ${index + 1}">`;
            carouselInner.appendChild(slide);

            // Buat indikator
            const indicator = document.createElement("button");
            indicator.type = "button";
            indicator.setAttribute("data-bs-target", "#portfolioCarousel");
            indicator.setAttribute("data-bs-slide-to", index);
            indicator.className = index === 0 ? "active" : "";
            indicator.setAttribute("aria-label", `Slide ${index + 1}`);
            carouselIndicators.appendChild(indicator);
        });

        // Tambahkan indikator ke carousel
        document.querySelector("#portfolioCarousel").appendChild(carouselIndicators);

        // Set judul modal
        document.querySelector("#portfolioModalLabel").textContent = title;

        // Inisialisasi ulang carousel agar indikator dan slide berfungsi
        new bootstrap.Carousel(document.getElementById("portfolioCarousel"), { interval: false });
    });
});
