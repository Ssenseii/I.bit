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



/// item 6 story


    
    /// variables

    var story = document.getElementById("story");
    var c1 = document.getElementById("choice1");
    var c2 = document.getElementById("choice2");
    var c3 = document.getElementById("choice3");
    var restart = document.getElementById("restart");

    /// Laboratory

    if (c1.addEventListener("click", function(){
        story.innerHTML = "You decided to sneak into Stacy and her team's Laboratory to understand why she was spending so much time there before her death. <br> The old security guard is asleep and the lock is easy to pick. <br> You can either look through her items, look through the weird glowing microscope, or see if she was hiding anything anywhere." ;

        c1.innerHTML = "Look through her items";
        c2.innerHTML = "Look through the microscope";
        c3.innerHTML = "Find out if she was hiding anything somewhere nearby";
    
        /// look throught Items
        if (c1.addEventListener("click", function(){
            story.innerHTML = "Her computer is off. <br> There's an unfinished note on her desk. <br> There's a book missing on her bookshelf.";

            c1.innerHTML = "Turn on Her computer";
            c2.innerHTML = "read the unfinished note";
            c3.innerHTML = "Find the book";

            if (c1.addEventListener("click",function(){
                story.innerHTML = "the computer becomes sentient and an 8-bit spider attacks you after spitting acid on the screen. <br> You are dead."

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));

            if (c2.addEventListener("click",function(){
                story.innerHTML = "My love, Jeremy... <br> I can't rememeber the last time you and I have been together, I miss you dearly and ~ <br> You are stabbed in the back by someone you can't see in the dark. <br> You are dead."

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));

            if (c3.addEventListener("click",function(){
                story.innerHTML = "The book is Frankenstein, About a dumb guy who tried to recreate life, and abandoning it... The realisation brings you to your knees. Your dad didn't love you. <br> You kill yourself by hanging that night";

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));


        }));

        /// microscope

        if (c2.addEventListener("click", function(){
            story.innerHTML = "There are mushrooms under the microscope lens.";

            c1.innerHTML = "Look through the microscope at the mushrooms";
            c2.innerHTML = "Steal the mushrooms";
            c3.innerHTML = "Eat the mushrooms";

            if (c1.addEventListener("click",function(){
                story.innerHTML = "The light from the mushrooms bursts through the lens and blinds you. You forgot to wear eye protective gear. <br>. You take a few steps back and fall on your head. <br> You are blind and dead."

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));

            if (c2.addEventListener("click",function(){
                story.innerHTML = "You stole the mushrooms.<br> You run away and sold them to the competition. <br> You received millions of dollars as a reward and became very very rich. <br> you forgot about your friend.<br> you are and always will be an asshole."

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));

            if (c3.addEventListener("click",function(){
                story.innerHTML = 'The mushrooms melt in your tongue. <br> You fart and the air materializes into a duplicate of you. <br> You have created a clone. The clone speaks only one word <span style="color: #ff1100;" >Blaze</span>';

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));


        }));

        /// Hiding
        if (c3.addEventListener("click", function(){
            story.innerHTML = "Her computer is off. <br> There's an unfinished note on her desk. <br> There's a book missing on her bookshelf.";

            c1.innerHTML = "Turn on Her computer";
            c2.innerHTML = "read the unfinished note";
            c3.innerHTML = "Find the book";

            if (c1.addEventListener("click",function(){
                story.innerHTML = "the computer becomes sentient and an 8-bit spider attacks you after spitting acid on the screen. <br> You are dead."

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));

            if (c2.addEventListener("click",function(){
                story.innerHTML = "My love, Jeremy... <br> I can't rememeber the last time you and I have been together, I miss you dearly and ~ <br> You are stabbed in the back by someone you can't see in the dark. <br> You are dead."

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));

            if (c3.addEventListener("click",function(){
                story.innerHTML = "The book is Frankenstein, About a dumb guy who tried to recreate life, and abandoning it... The realisation brings you to your knees. Your dad didn't love you. <br> You kill yourself by hanging that night";

                c1.style.display = "none";
                c2.style.display = "none";
                c3.style.display = "none";
            }));


        }));

        
    }));
