const title = "Hi, I'm Maegan";
const subtitle = "Computer science student and aspiring developer.";

let titleIndex = 0;
let subtitleIndex = 0;

const titleElement = document.getElementById("main-title");
const subtitleElement = document.getElementById("typing-text");

function typeTitle() {

    if (titleIndex < title.length) {
        titleElement.innerHTML += title.charAt(titleIndex);

        titleIndex++;

        //Pause slightly after "Hi,"
        if (titleIndex ==3) {
            setTimeout(typeTitle, 500);
        } else {
            setTimeout(typeTitle, 100);
        }

    } else {

        //Small pause before subtitle starts
        setTimeout(typeSubtitle, 400);
    }
}

function typeSubtitle() {

    if (subtitleIndex < subtitle.length) {

        subtitleElement.innerHTML += subtitle.charAt(subtitleIndex);

        subtitleIndex++;

        setTimeout(typeSubtitle, 50);  
    }
}

typeTitle();