function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // browser validation
    if (!email.checkValidity() || !password.checkValidity()) {
        email.reportValidity();
        password.reportValidity();
        return;
    }

    //  redirect only after validation
    window.location.href = "../front/front.html";
}
