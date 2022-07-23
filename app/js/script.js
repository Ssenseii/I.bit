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

var form3 = document.getElementById("formI7");
function handleForm(event) { event.preventDefault(); }
form3.addEventListener('submit', handleForm);


/// auto-slide carousel removed

$('.carousel').carousel({
    interval: false,
});

/// perevent double click;

// $(document).ready(function () {
//     $("#buttonShowFields").click(function (e) {
//         e.preventDefault();
//         $("#InfoAddFields").toggle();
//     });

// });
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

/// grabbing form7 input


function grabInput() {
    var codeI7_field = document.getElementById("I7input");
    var codeI7_raw = document.getElementById("I7input").value;
    var codeI7 = codeI7_raw.toUpperCase();
    var hints = document.getElementById("hint7")


    if (codeI7 == "STACY") {
        codeI7_field.value = "";
        codeI7_field.placeholder = "That's correct!";

        hints.innerHTML= "WHOAMI";
        hints.style.color = "#ff0000";
    } else {
        codeI7_field.value = "";
        codeI7_field.placeholder = "Wrong Person!";
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
    var rawKeyword_field = document.getElementById("codeInput");
    var rawKeyword = document.getElementById("codeInput").value;
    let keyword = rawKeyword.toUpperCase();
    ///var code =["UNKNOWN", "MUSHROOM", "SHADOW", "TIME", "AWAKEN", "BLAZE", "DUPLICATE", "WHOAMI"];

        switch (keyword){
            case "UNKNOWN":
                var element = document.getElementById("unknown");
                var hint1 = document.getElementById("hint1");
                rawKeyword_field.value = "";
                element.classList.add("colorMe");
                hint1.innerHTML = "The killer is unknown, no traces of anyone else being there other than Stacy.";
                break;
                
            case "MUSHROOM":
                rawKeyword_field.value = "";
                var element = document.getElementById("mushroom");
                var hint2 = document.getElementById("hint2");
                element.classList.add("colorMe");
                hint2.innerHTML = "Stacy and her team was working on a revolutionary drug that would extend life expectancy. The product was unfinished.";
                break;
                
            case "SHADOW":
                rawKeyword_field.value = "";
                var element = document.getElementById("shadow");
                var hint3 = document.getElementById("hint3");
                element.classList.add("colorMe");
                hint3.innerHTML = "Stacy was fascinated by something or someone. Stacy ate something. Stacy was afraid.";
                break;
                
            case "TIME":
                rawKeyword_field.value = "";
                var element = document.getElementById("time");
                hint4 = document.getElementById("hint4");
                element.classList.add("colorMe");
                hint4.innerHTML = "Stacy seems to like jeremy, Her computer is bugged by somekind of mutated spider";
                
                break;
                
            case "AWAKEN":
                rawKeyword_field.value = "";
                var element = document.getElementById("awaken");
                var hint5 = document.getElementById("hint5");
                element.classList.add("colorMe");
                hint5.innerHTML = "It's a conversation between Stacy? and someone who knows Stacy very well.";
                break;
                
            case "BLAZE":
                rawKeyword_field.value = "";
                var element = document.getElementById("blaze");
                var hint6 = document.getElementById("hint6");
                element.classList.add("colorMe");
                hint6.innerHTML = "Build the story from the choices";
                break;
                
                
            case "WHOAMI":
                rawKeyword_field.value = "";
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


/// accessible font

function AccessibleFont(){
    var fontAccess = document.getElementById("mainAccess");  
    var fontAccess2 = document.getElementById("buttons");
    var button = document.getElementById("fontAccess");
    var buttonValue = document.getElementById("fontAccess").value;

        fontAccess.classList.toggle("fontAccessible");
        fontAccess2.classList.toggle("fontAccessible");
        buttonValue = "Change to original display Font"


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


/// winning

var intervalId = window.setInterval(function () {
    const code1 = document.getElementById("unknown");
    const code2 = document.getElementById("mushroom");
    const code3 = document.getElementById("shadow");
    const code4 = document.getElementById("time");
    const code5 = document.getElementById("awaken");
    const code6 = document.getElementById("blaze");
    const code7 = document.getElementById("whoami");

    if (code1.classList.contains("colorMe")){
        if (code2.classList.contains("colorMe")) {
            if (code3.classList.contains("colorMe")) {
                if (code4.classList.contains("colorMe")) {
                    if (code5.classList.contains("colorMe")) {
                        if (code6.classList.contains("colorMe")) {
                            if (code7.classList.contains("colorMe")) {
                                window.open("https://www.youtube.com/watch?v=euik1Zrs30w")
                            }
                        }
                    }
                }
            }
        }
    }
}, 1000);