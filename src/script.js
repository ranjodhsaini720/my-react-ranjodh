window.onscroll = function () { scroll() };
function scroll() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("nav").style.backgroundColor = "rgba(255, 255, 255, 0.869)"
        document.getElementById("nav").style.transition = "all 0.3s ease-in-out"
        document.getElementById("nav").style.padding = "5px 0"

    } else {
        document.getElementById("nav").style.backgroundColor = "white"
        document.getElementById("nav").style.transition = "all 0.3s ease-in-out"
        document.getElementById("nav").style.padding = "15px 0"


    }
    // alert("hello");
}