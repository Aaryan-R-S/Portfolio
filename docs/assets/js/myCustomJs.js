function showOnClick() {
    var btnText = document.getElementById("showMore")
    // var cards = document.querySelectorAll(".showOnClick")
    if (btnText.innerHTML == "Show More") {
        btnText.innerHTML = "Show Less";
        // cards.forEach(element => {
        //     element.style.display = "inline"
        // });
        $("div.showOnClick").fadeIn(800);
    } else {
        btnText.innerHTML = "Show More";
        // cards.forEach(element => {
            //     element.style.display = "none"
            // });
        $("div.showOnClick").fadeOut(500);
    }
}

function toTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}