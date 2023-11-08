let prevScrollPos = window.scrollY;

window.onscroll = function() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 100) {
        if (prevScrollPos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-65px";
        }
    }

    prevScrollPos = currentScrollPos;
};
