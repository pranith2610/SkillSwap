function signup() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // browser validation
    if (
        !name.checkValidity() ||
        !email.checkValidity() ||
        !password.checkValidity() ||
        !confirmPassword.checkValidity()
    ) {
        name.reportValidity();
        email.reportValidity();
        password.reportValidity();
        confirmPassword.reportValidity();
        return;
    }

    // password match check
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.reportValidity();
        confirmPassword.setCustomValidity("");
        return;
    }

    // ✅ redirect after success
    window.location.href = "../front/front.html";
}
