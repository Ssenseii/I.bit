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

if (c1.addEventListener("click", function () {
    story.innerHTML = "You believe the cops have done a terrible job in investigating the murder of your friend. <br> You believe they left a ton of evidence unaccounted for.<br> When you get there. The smell of burnt flesh is still in the air. <br> drops of blood are scattered down a tree bark. <br> You try to do some investigative work";

    c1.innerHTML = "Inspect the surrounding grounds";
    c2.innerHTML = "Inspect the river";
    c3.innerHTML = "Inspect the ash covered fround";

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
            story.innerHTML = "You die for eating a sandwhich.";

            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
        }));


    }));

    /// the river

    if (c2.addEventListener("click", function () {
        story.innerHTML = "Water runs";
        /// you stopped here

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
