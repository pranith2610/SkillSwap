/* SIDEBAR ACTIVE */
const sidebarBtns = document.querySelectorAll(".sidebar button");

sidebarBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        sidebarBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

/* LIVE SEARCH */
const searchInput = document.getElementById("skillTitle");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();
    cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(value)
            ? "flex"
            : "none";
    });
});

/* POINTS DEMO */
let points = 100;
const pointsBox = document.querySelector(".points");

cards.forEach(card => {
    card.addEventListener("dblclick", () => {
        points += 5;
        pointsBox.textContent = `🪐 ${points}`;
    });
});
