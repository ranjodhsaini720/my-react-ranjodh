window.onscroll = function () { scroll() };
function scroll() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("nav").style.backgroundColor = "white"
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(255, 255, 255, 0.679)"
    }
    console.log("hello");
}