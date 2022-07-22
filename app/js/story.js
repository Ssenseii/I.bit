/// item 6 story



/// variables

var story = document.getElementById("story");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var restart = document.getElementById("restart");



/// Laboratory
if (c1.addEventListener("click", function () {
    story.innerHTML = "You decided to sneak into Stacy and her team's Laboratory to understand why she was spending so much time there before her death. <br> The old security guard is asleep and the lock is easy to pick. <br> You can either look through her items, look through the weird glowing microscope, or see if she was hiding anything anywhere.";

    c1.innerHTML = "Look through her items";
    c2.innerHTML = "Look through the microscope";
    c3.innerHTML = "Find out if she was hiding anything somewhere nearby";

    /// look throught Items
    if (c1.addEventListener("click", function () {
        story.innerHTML = "Her computer is off. <br> There's an unfinished note on her desk. <br> There's a book missing on her bookshelf.";

        c1.innerHTML = "Turn on Her computer";
        c2.innerHTML = "read the unfinished note";
        c3.innerHTML = "Find the book";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "the computer becomes sentient and an 8-bit spider attacks you after spitting acid on the screen. <br> You are dead."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "My love, Jeremy... <br> I can't rememeber the last time you and I have been together, I miss you dearly and ~ <br> You are stabbed in the back by someone you can't see in the dark. <br> You are dead."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c3.addEventListener("click", function () {
            story.innerHTML = "The book is Frankenstein, About a dumb guy who tried to create life, and ended up abandoning it... The realization brings you to your knees. Your dad didn't love you. <br> You kill yourself by hanging that night";

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));


    }));

    /// microscope

    if (c2.addEventListener("click", function () {
        story.innerHTML = "There are mushrooms under the microscope lens.";

        c1.innerHTML = "Look through the microscope at the mushrooms";
        c2.innerHTML = "Steal the mushrooms";
        c3.innerHTML = "Eat the mushrooms";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "The light from the mushrooms bursts through the lens and blinds you. You forgot to wear eye protective gear. <br>. You take a few steps back and fall on your head. <br> You are blind and dead."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "You stole the mushrooms.<br> You run away and sold them to the competition. <br> You received millions of dollars as a reward and became very very rich. <br> you forgot about your friend.<br> you are and always will be an asshole."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c3.addEventListener("click", function () {
            story.innerHTML = 'The mushrooms melt in your tongue. <br> You fart and the air materializes into a duplicate of you. <br> You have created a clone. The clone speaks only one word <span style="color: #ff1100;" >Blaze</span>';

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));


    }));

    /// Hiding
    if (c3.addEventListener("click", function () {
        story.innerHTML = "Initially, You notice that someone has been sleeping on the couch recently, There is warm food on the desk next to the unfinished note.";

        c1.innerHTML = "Check the couch";
        c2.innerHTML = "Inspect the food";
        c3.style.display = "none";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "That's weird. The couch still smells like Stacy, and there is a giant hole in the middle as if someone was reently sleeping on it. <br> You get hit in the back of the head. <br> You are unconscious and soon to be dead."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "My love, Jeremy... <br> I can't rememeber the last time you and I have been together, I miss you dearly and ~ <br> You are stabbed in the back by someone you can't see in the dark. <br> You are dead."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

    }));


}));













/// Burn Location

if (c2.addEventListener("click", function () {
    story.innerHTML = "You believe the cops have done a terrible job in investigating the murder of your friend. <br> You believe they left a ton of evidence unaccounted for.<br> When you get there. The smell of burnt flesh is still in the air. <br> drops of blood are scattered down a tree bark. <br> You try to do some investigative work";

    c1.innerHTML = "Inspect the surrounding grounds";
    c2.innerHTML = "Inspect the river";
    c3.innerHTML = "Inspect the ash covered ground";

    /// Surrounding Ground
    if (c1.addEventListener("click", function () {
        story.innerHTML = "Yellow tape everywhere. <br> The earth around here is covered in moss and mud. <br> Nothing out of the ordinary.";

        c1.innerHTML = "Examine the blood";
        c2.innerHTML = "Examine the burn marks";
        c3.innerHTML = "sit down and eat a sandwhich";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "It seems it came from top to bottom. <br> the trail ends at the visible roots. <br> Slasher must've been behind her and suprised her."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "The ground has burn marks. <br> but it's not from the burnt body. <br> Must've been someone camping here. <br> Stacy never camps though."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c3.addEventListener("click", function () {
            story.innerHTML = "You die eating a sandwhich.";

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));


    }));

    /// the river

    if (c2.addEventListener("click", function () {
        story.innerHTML = "Water flows. You can't help but wonder if her blood ran through with the stream. <br> <br> It doesn't seem as interesting";
        

        c1.innerHTML = "Follow the river";
        c2.innerHTML = "Inspect the grounds around the river";
        c3.innerHTML = "try crossing the river to the other side";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "The river keeps on going, and you walk following it. until you reach a rock in the middle of the stream, with a rope stuck in one of its crevices, it's other end lasso'd to some sort of a metal can. You try to lean in and grab the rope... You die."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "stacy's footmarks, facing the river. <br> There's a deep mark too. <br> Someone jumped from here. <br><br> You imitate the jump and you drown 3 minutes later."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c3.addEventListener("click", function () {
            story.innerHTML = "Have you not learned from the previous two choices? <br> I end up coding your death myself for being an idiot";

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));


    }));

    /// Ash covered ground
    if (c3.addEventListener("click", function () {
        story.innerHTML = "Ah dear Stacy, She was burned here. black marks all around. <br> She must've went up in flames. which means she must've been covered in a fire instigator like gasoline.";

        c1.innerHTML = "Look for a gas tank";
        c2.innerHTML = "Inspect the ash";
        c3.style.display = "none";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "You keep looking and looking around but you can't find anything. Maybe whoever burned her threw the can in the river."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "It's odd, you've never seen ash like this before. You can almost make out its faint glow."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

    }));


}));














if (c3.addEventListener("click", function () {
    story.innerHTML = "Stacy's House in a mess, You can't believe a scientist like her lives like this. <br> There' s a horrible smell in her bathroom. <br> There's a sound coming out of the pantry, like scratching. <br> Something is giving light in the bedroom, and you believe, you just heard someone laugh ";

    c1.innerHTML = "Sneak into the bathroom";
    c2.innerHTML = "Open the pantry door";
    c3.innerHTML = "Sneak into the bedroom and see who it is";

    /// Bathroom

    if (c1.addEventListener("click", function () {
        story.innerHTML = "The horrible smell is coming from the closed toilet seat, Someone is showering behind the curtains with the lights is off. <br> unrelated: you feel a fart coming";

        c1.innerHTML = "Open the toilet seat";
        c2.innerHTML = "See who's showering";
        c3.innerHTML = "Fart";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "That's stacy's decomposing head, green blood. <br> As you inhale the toxic fumes. You slowly choke and die in the bathroom."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "That's stacy showering. But she isn't the same Stacy, something is off about her. She turns, sees you and spits acid in your face. You are dead"

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c3.addEventListener("click", function () {
            story.innerHTML = "The entire house clicks their tongue synchronically. You alerted the hive of Stacys. You can imagine what happened next";

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));


    }));

    /// Pantry

    if (c2.addEventListener("click", function () {
        story.innerHTML = "You open the pantry door. The same spider from the computer video is crawling around.";
        
        c1.innerHTML = "Stomp on it";
        c2.innerHTML = "Follow it";
        c3.innerHTML = "Run from it";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "The spider is too strong. You foot doesn't even touch the ground. <br> The spider spits acid on your foot making you scream in pain. The stacy hive is alerted. Guess who's getting eaten tonight."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "The spider seemed hesitant. Unsure of your nature or who you are. <br> You follow the spider through the dark corridors as you see a bunch of stacies gathered in her room. <br> The spider leads you to the kitchen window. opens it and signals you to leave. <br> You understand the spider is on a mission to destory the hive of stacy's occupying his and his owner's home. You join him."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c3.addEventListener("click", function () {
            story.innerHTML = "The spider shoots you in the back of the head with an acid green spit ball. You die instantly.";

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));


    }));


    /// Bedroom
    if (c3.addEventListener("click", function () {
        story.innerHTML = "'What the hell is that?' you ask yourself <br> Not one, Not two... But aleast a dozen versions of stacy laying in bed. Watching a sitcom on the bedroom tv. <br>This is surreal to you. <br>Which one is the real one?";

        c1.innerHTML = "Try talking to them";
        c2.innerHTML = "Call the cops";
        c3.style.display = "none";

        if (c1.addEventListener("click", function () {
            story.innerHTML = "They were suprised. <br>BUT... <br>They always wanted to try human reproduction.<br> You are lucky tonight, but you don't know they'll eat you after..."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

        if (c2.addEventListener("click", function () {
            story.innerHTML = "You are called insane and shot through the phone."

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));

    }));


}));



