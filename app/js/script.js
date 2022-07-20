///stop page refresh

var form = document.getElementById("formSubmit");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

var form1 = document.getElementById("formDecode");
function handleForm(event) { event.preventDefault(); }
form1.addEventListener('submit', handleForm);

var form2 = document.getElementById("formUnlock");
function handleForm(event) { event.preventDefault(); }
form2.addEventListener('submit', handleForm);


/// auto-slide carousel removed

$('.carousel').carousel({
    interval: false,
});

/// refresh page button

function refreshPage() {
    var restart = document.getElementById("restart")
    restart.addEventListener("click", function(){
        window.location.reload();
    })
    }    
///collapsible

var coll = document.getElementsByClassName("item__five-header-actions-settings");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("circleActive");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}



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


/// convert letters to numbers

function convertNumberLetter(){
    var rawKeyword = document.getElementById("decodeInput").value;
    if (rawKeyword == 84561004){
        const span1 = document.getElementById('decodeWord1');
        span1.textContent = 'mushroom';
        span1.style.textDecoration= "underline";
        span1.style.color = "red";
        const span2 = document.getElementById('decodeWord2');
        span2.textContent = 'mushroom';
        span2.style.color = "red";
        span2.style.textDecoration= "underline";
        const span3 = document.getElementById('decodeWord3');
        span3.textContent = 'mushroom';
        span3.style.color = "red";
        span3.style.textDecoration= "underline";
        const span4 = document.getElementById('decodeWord4');
        span4.textContent = 'mushroom';
        span4.style.textDecoration= "underline";
        span4.style.color = "red";
    } else {
        if(rawKeyword == 547309){
            const span2 = document.getElementById("decodeShadow");
            span2.textContent = 'Shadow';
        } else {
            var inputfield = document.getElementById("decodeInput")
            inputfield.value = '';
            inputfield.placeholder = "encryption unavailable";
        }
    } 
}

/// unlock function

function unlock(){
    var rawpassword = document.getElementById("unlockInput").value;
    let password = rawpassword.toUpperCase();
    if(password == "JEREMY"){

        var block = document.getElementById("block");
        var chat = document.getElementById("chat");

        block.classList.remove("displayflex");
        block.classList.add("displaynone");

        chat.classList.add("displayflex");
        chat.classList.remove("displaynone");

        var unlockField = document.getElementById("unlockInput");
        unlockField.value = '';
        unlockField.placeholder = "That's Correct !!!";


    }
    else{
        if (password == "MOON"){
            var unlockField = document.getElementById("unlockInput");
            unlockField.value = '';
            unlockField.placeholder = "not saad's love, you idiot";
            unlockField.style.width = "25rem";
        }

        else{
            var unlockField = document.getElementById("unlockInput");
            unlockField.value = '';
            unlockField.placeholder = "try again...";
            unlockField.style.width = "auto";
            }

        }
}

/// sentience

function sentience(){
    var stat = document.getElementById("static")
    var animated = document.getElementById("animated")

    
    
    stat.classList.remove("displayblock");
    stat.classList.add("displaynone");
    
    animated.classList.add("displayblock");
    animated.classList.remove("displaynone");
}

function timerSentience(){
    setTimeout(function(){
        var static = document.getElementById("static")
        var animated = document.getElementById("animated")
    
        animated.classList.remove("displayblock");
        animated.classList.add("displaynone");
    
        static.classList.add("displayblock");
        static.classList.remove("displaynone");


        animated.src = `${animated.src.replace(/\?.*$/, "")}?x=${Math.random()}`;

    }, 17500)
}

/// grabbing keywords

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

///show deleted messages

function showDeletedMessage(){
    var deletedcode = document.getElementById("decodeAwaken")
    if (deletedcode.style.visibility == "hidden"){
        deletedcode.style.visibility = "visible";
    }
    else{
        deletedcode.style.visibility = "hidden";
    }
}


///audios

function playAudio(){
    
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-single-key-press-in-a-laptop-2541.mp3");
    audio.play();
}


function playAudioPages(){
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-slide-click-1130.mp3");
    audio.play();
}

function playAudioCodes(){
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3")
    audio.play();
}

/// clock function:
// ///setInterval(function () {
// unlockField.value = new Date().toLocaleTimeString();
//         }, 1000);


