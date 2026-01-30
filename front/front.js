const COURSE_COST = 20;

if (!localStorage.getItem("userPoints")) {
    localStorage.setItem("userPoints", "100");
}

function getPoints() {
    return parseInt(localStorage.getItem("userPoints"));
}

function setPoints(value) {
    localStorage.setItem("userPoints", value);
    document.querySelector(".points").textContent = `⭐ ${value}`;
}

document.addEventListener("DOMContentLoaded", () => {
    setPoints(getPoints());
    typeText();
});


document.querySelectorAll(".course-card").forEach(card => {
    card.addEventListener("click", () => {
        const course = card.dataset.course;
        const link = card.dataset.link;

        let points = getPoints();

        if (points < COURSE_COST) {
            alert("❌ Not enough points to enroll!");
            return;
        }

        const confirmEnroll = confirm(
            `This course costs ${COURSE_COST} points.\nDo you want to continue?`
        );

        if (!confirmEnroll) return;

        points -= COURSE_COST;
        setPoints(points);

        alert(`✅ Enrolled in ${course}!\nRemaining points: ${points}`);

        window.location.href = link;
    });
});


///function typeText() {
//    const text = "Welcome!! Learn, Teach & Grow Together";
  //  const target = document.getElementById("typeText");
    //let i = 0;
    //target.textContent = "";
//
  //  function type() {
    //    if (i < text.length) {
      //      target.textContent += text.charAt(i++);
        //    setTimeout(type, 40);
       // }
   // }
   // type();
//}


document.getElementById("skillTitle").addEventListener("keyup", e => {
    const value = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(value)
            ? "flex"
            : "none";
    });
});
