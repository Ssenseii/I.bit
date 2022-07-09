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

///stop page refresh

var form = document.getElementById("formSubmit");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

/// grabbing keywords
function grabKeyword(){
    var rawKeyword = document.getElementById("codeInput").value;
    let keyword = rawKeyword.toUpperCase();
    var code = "UNKNOWN";


        if (keyword == code){
            var element = document.getElementById("yellow");
            element.classList.add("yellowBall");
            
        }
        else{
            element.classList.add("Ball");
        }

}