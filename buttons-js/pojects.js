// Join project buttons
const joinButtons = document.querySelectorAll(".project-footer button");

joinButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Project joined successfully!\nComplete it to earn points.");
    });
});

// Browse & Post buttons
const optionButtons = document.querySelectorAll(".option-card button");

optionButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("🚀 This feature will open the next page (backend later)");
    });
});
