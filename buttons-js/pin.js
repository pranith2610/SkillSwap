/* LOAD PINNED ITEMS FROM BACKEND */
window.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("http://localhost:3000/api/pins");
    const pinnedItems = await res.json();

    pinnedItems.forEach(item => {
        const card = document.querySelector(`.pin-card[data-id="${item.id}"]`);
        if (card) {
            const btn = card.querySelector(".pin-btn");
            btn.classList.add("pinned");
            btn.textContent = "✅ Pinned";
        }
    });
});//

/* PIN / UNPIN */
document.querySelectorAll(".pin-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
        const card = btn.closest(".pin-card");
        const id = card.getAttribute("data-id");
        const type = card.getAttribute("data-type");
        const title = card.querySelector("h4").innerText;

        if (btn.classList.contains("pinned")) {
            // UNPIN
            await fetch("http://localhost:3000/api/unpin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });

            btn.classList.remove("pinned");
            btn.textContent = "📌 Pin";
        } else {
            // PIN
            await fetch("http://localhost:3000/api/pin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, type, title })
            });

            btn.classList.add("pinned");
            btn.textContent = "✅ Pinned";
        }
    });
});

/* FILTER LOGIC (UNCHANGED) */
const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".pin-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const type = btn.getAttribute("data-type");

        cards.forEach(card => {
            if (type === "all" || card.getAttribute("data-type") === type) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
