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
function grabKeywordUnknown(){
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
function grabKeyword(){
    var rawKeyword = document.getElementById("codeInput").value;
    let keyword = rawKeyword.toUpperCase();
    ///var code =["UNKNOWN", "MUSHROOM", "SHADOW", "TIME", "AWAKEN", "BLAZE", "DUPLICATE", "WHOAMI"];

        switch (keyword){
            case "UNKNOWN":
                var element = document.getElementById("unknown");
                element.classList.add("colorMe");
                break;
                
            case "MUSHROOM":
                var element = document.getElementById("mushroom");
                element.classList.add("colorMe");
                break;
                
            case "SHADOW":
                var element = document.getElementById("shadow");
                element.classList.add("colorMe");
                break;
                
            case "TIME":
                var element = document.getElementById("time");
                element.classList.add("colorMe");
                break;
                
            case "AWAKEN":
                var element = document.getElementById("awaken");
                element.classList.add("colorMe");
                break;
                
            case "BLAZE":
                var element = document.getElementById("blaze");
                element.classList.add("colorMe");
                break;
                
            case "DUPLICATE":
                var element = document.getElementById("duplicate");
                element.classList.add("colorMe");
                break;
                
            case "WHOAMI":
                var element = document.getElementById("whoami");
                element.classList.add("colorMe");
                break;
                
        }

        

}
