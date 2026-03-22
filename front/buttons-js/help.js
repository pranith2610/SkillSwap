const solutionBox = document.getElementById("solutionBox");

const solutions = {
    login: "Try resetting your password. Make sure your email is verified.",
    points: "Points update after task verification. Refresh or wait a few minutes.",
    course: "Ensure you selected Learn mode and have access permission.",
    project: "Check submission format and deadlines.",
    upload: "File size may be too large. Try a smaller file or better connection.",
    other: "Please describe your issue below. Our team will assist you."
};

// Handle issue clicks
document.querySelectorAll(".issue-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
        const issue = btn.getAttribute("data-issue");
        solutionBox.querySelector("p").textContent = solutions[issue];
    });
});

// Handle support form
document.getElementById("supportForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Support request submitted.\nWe’ll contact you soon.");
    e.target.reset();
});
