document.addEventListener("DOMContentLoaded", function () {

    const stars = document.querySelectorAll("#stars span");
    const ratingText = document.getElementById("ratingText");

    let currentRating = 0;

    stars.forEach(star => {

        // CLICK
        star.addEventListener("click", () => {
            currentRating = star.dataset.value;
            updateStars(currentRating);
            ratingText.textContent = `You rated: ${currentRating} / 5 ⭐`;
        });

        // HOVER
        star.addEventListener("mouseenter", () => {
            updateStars(star.dataset.value);
        });

        // LEAVE
        star.addEventListener("mouseleave", () => {
            updateStars(currentRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(s => {
            s.classList.toggle(
                "active",
                s.dataset.value <= rating
            );
        });
    }
});
