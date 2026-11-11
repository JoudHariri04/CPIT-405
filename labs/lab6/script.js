const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");
const likeCount = document.getElementById("like-count");
const dislikeCount = document.getElementById("dislike-count");
const commentInput = document.getElementById("comment-input");
const commentBtn = document.getElementById("comment-btn");
const commentsList = document.getElementById("comments-list");
const resetBtn = document.getElementById("reset-btn");
const message = document.getElementById("message");


// starting values
let likes = 0;
let dislikes = 0;
let comments = []; // array to store the comments


// cookie functions :

function setCookie(name, value, days) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; max-age=" + days * 24 * 60 * 60 + "; path=/"; // max-age is in seconds so we turn the days into seconds
}
// encodeURIComponent because the comment text could have ; or = and that would break the cookie
// ex: setCookie("vote", "like", 7) -> vote=like that stays for 7 days


function getCookie(name) {
    let myCookies = document.cookie.split(";"); // document.cookie gives all cookies in ONE string separated by ;
    for (let i = 0; i < myCookies.length; i++) {
        let pair = myCookies[i].trim().split("="); // trim removes the space before each cookie, then split the name and the value
        if (pair[0] === name) {
            return decodeURIComponent(pair[1]); // [0] is the name, [1] is the value
        }
    }
    return null; // cookie doesnt exist
}
// ex: document.cookie = "likes=3; vote=like"
// split(";") -> ["likes=3", " vote=like"]
// " vote=like".trim().split("=") -> ["vote", "like"]
// getCookie("vote") -> "like"


function deleteCookie(name) {
    document.cookie = name + "=; expires=" + new Date(2000, 0, 1).toUTCString() + "; path=/"; // a date in the past deletes the cookie
}


// update the page :

function updateUI() {
    likeCount.textContent = likes;
    dislikeCount.textContent = dislikes;

    const vote = getCookie("vote"); // "like" or "dislike" or null if the user didnt vote yet
    likeBtn.disabled = vote !== null; // if the user voted disable both buttons
    dislikeBtn.disabled = vote !== null;
    likeBtn.classList.toggle("chosen", vote === "like"); // toggle with true/false adds or removes the class
    dislikeBtn.classList.toggle("chosen", vote === "dislike");

    const commented = getCookie("commented");
    commentInput.disabled = commented !== null; // same idea, only one comment per user
    commentBtn.disabled = commented !== null;

    commentsList.innerHTML = ""; // clear the list first so comments dont show twice
    comments.forEach((comment) => {
        const li = document.createElement("li"); // create a list item for each comment
        li.textContent = comment; // textContent not innerHTML so if someone writes html it shows as text
        commentsList.appendChild(li);
    });
}


function showMessage(text) {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = ""; // hide the message after 3 seconds
    }, 3000);
}


function popAnimation(button) {
    button.classList.remove("pop");
    void button.offsetWidth; // trick to restart the animation if the class was just there
    button.classList.add("pop");
}


// when the page loads :
// check the cookies and put the saved values back

likes = Number(getCookie("likes")) || 0; // Number(null) is 0 , || 0 is just in case
dislikes = Number(getCookie("dislikes")) || 0;

const savedComments = getCookie("comments");
if (savedComments) {
    comments = JSON.parse(savedComments); // cookies only save strings so we turn it back into an array
}

updateUI();


// like / dislike :

function handleVote(choice) {
    if (getCookie("vote")) {
        showMessage("You already voted!"); // the cookie is there so the user voted before
        return; // stop here
    }

    if (choice === "like") {
        likes++;
        setCookie("likes", likes, 7);
        popAnimation(likeBtn);
    } else {
        dislikes++;
        setCookie("dislikes", dislikes, 7);
        popAnimation(dislikeBtn);
    }

    setCookie("vote", choice, 7); // save the choice so the user cant vote again
    updateUI();
}


likeBtn.addEventListener("click", () => handleVote("like"));
dislikeBtn.addEventListener("click", () => handleVote("dislike"));
// we use one function for both buttons and just send which one was clicked


// comments :

commentBtn.addEventListener("click", () => {

    const text = commentInput.value.trim(); // trim removes the spaces at the start and end
    if (text === "") {
        showMessage("Write something first!"); // dont save empty comments
        return;
    }

    comments.push(text); // add the comment to the array
    setCookie("comments", JSON.stringify(comments), 7); // JSON.stringify turns the array into a string for the cookie

    commentInput.value = ""; // clear the input after submitting
    updateUI();
});
// JSON.stringify(["hi", "nice"]) -> '["hi","nice"]'
// JSON.parse('["hi","nice"]') -> ["hi", "nice"]


// reset :

resetBtn.addEventListener("click", () => {
    // delete all the cookies
    deleteCookie("vote");
    deleteCookie("comments");
    deleteCookie("likes");
    deleteCookie("dislikes");

    // reset the counters and the array
    likes = 0;
    dislikes = 0;
    comments = [];

    updateUI(); // buttons get enabled again because the cookies are gone
    showMessage("Your vote and comments have been reset. You can vote again!"); // confirmation message (optional part)
});