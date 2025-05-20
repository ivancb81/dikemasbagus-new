const slidesWrapper = document.getElementById("slidesWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const totalSlides = slidesWrapper.children.length;
let currentIndex = 0;

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

function setSliderPosition() {
    slidesWrapper.style.transform = `translateX(${currentTranslate}px)`;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function updateSlidePosition() {
    currentTranslate = -currentIndex * slidesWrapper.clientWidth;
    prevTranslate = currentTranslate;
    slidesWrapper.style.transition = "transform 0.5s ease-in-out";
    setSliderPosition();
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

// Mouse events for drag
slidesWrapper.addEventListener("mousedown", dragStart);
slidesWrapper.addEventListener("mouseup", dragEnd);
slidesWrapper.addEventListener("mouseleave", dragEnd);
slidesWrapper.addEventListener("mousemove", dragAction);

// Touch events for mobile support
slidesWrapper.addEventListener("touchstart", dragStart);
slidesWrapper.addEventListener("touchend", dragEnd);
slidesWrapper.addEventListener("touchmove", dragAction);

function getPositionX(event) {
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function dragStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    slidesWrapper.style.transition = "none";
    animationID = requestAnimationFrame(animation);
}

function dragAction(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
}

function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    // Threshold to change slide (e.g. 50px)
    if (movedBy < -50 && currentIndex < totalSlides - 1) currentIndex++;
    if (movedBy > 50 && currentIndex > 0) currentIndex--;

    updateSlidePosition();
}

// Initialize slider position
updateSlidePosition();
