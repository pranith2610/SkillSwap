const cancelBtn = document.querySelector(".cancel");
const confirmBtn = document.querySelector(".confirm");

cancelBtn.addEventListener("click", () => {
    // Go back to previous page
    window.history.back();
});

confirmBtn.addEventListener("click", () => {
    // OPTIONAL: clear login data later
    // localStorage.clear();
    // sessionStorage.clear();

    // Redirect to login page
    window.location.href = "../loginpage/login.html"; // adjust path if needed
});
