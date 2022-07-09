/// auto-slide carousel removed

$('.carousel').carousel({
    interval: false,
});


// increase brightness

function increaseBrightness() {
    var element = document.getElementById("scrn");
    element.classList.add("increaseBrightness");
    element.classList.remove("decreaseBrightness");
}

function decreaseBrightness() {
    var element = document.getElementById("scrn");
    element.classList.add("decreaseBrightness");
    element.classList.remove("increaseBrightness");
}


/// grabbing keywords
function grabKeyword(){
    var element = document.getElementById("#smtg")
}