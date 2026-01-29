const learnBtn = document.getElementById("learnBtn");
const teachBtn = document.getElementById("teachBtn");

const notesBtns = document.querySelectorAll(".notes-btn");
const videoBtns = document.querySelectorAll(".video-btn");

// Default = Learn
setLearnMode();

learnBtn.addEventListener("click", setLearnMode);
teachBtn.addEventListener("click", setTeachMode);

function setLearnMode() {
    learnBtn.classList.add("active");
    teachBtn.classList.remove("active");

    notesBtns.forEach(btn => btn.textContent = "📘 Read Notes");
    videoBtns.forEach(btn => btn.textContent = "🎥 Watch Videos");
}

function setTeachMode() {
    teachBtn.classList.add("active");
    learnBtn.classList.remove("active");

    notesBtns.forEach(btn => btn.textContent = "📘 Upload Notes");
    videoBtns.forEach(btn => btn.textContent = "🎥 Upload Video");
}
