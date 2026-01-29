window.onload = function () {
    const text = "Welcome!!  Learn, Teach & Grow Together";
    const target = document.getElementById("typeText");

    let i = 0;
    target.textContent = "";

    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, 45);
        }
    }

    type();
};
