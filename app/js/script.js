///stop page refresh

var form = document.getElementById("formSubmit");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

var form = document.getElementById("formDecode");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


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


/// convert letters to numbers

function convertNumberLetter(){
    var rawKeyword = document.getElementById("decodeInput").value;
    if (rawKeyword == 84561004){
        const span1 = document.getElementById('decodeWord1');
        span1.textContent = 'mushroom';
        span1.style.textDecoration= "underline";
        const span2 = document.getElementById('decodeWord2');
        span2.textContent = 'mushroom';
        span2.style.textDecoration= "underline";
        const span3 = document.getElementById('decodeWord3');
        span3.textContent = 'mushroom';
        span3.style.textDecoration= "underline";
        const span4 = document.getElementById('decodeWord4');
        span4.textContent = 'mushroom';
        span4.style.textDecoration= "underline";
    } else {
        if(rawKeyword == 547309){
            const span2 = document.getElementById("decodeShadow");
            span2.textContent = 'Shadow';
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
        var stat = document.getElementById("static")
        var animated = document.getElementById("animated")
    
        animated.classList.remove("displayblock");
        animated.classList.add("displaynone");
    
        static.classList.add("displayblock");
        static.classList.remove("displaynone");
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
