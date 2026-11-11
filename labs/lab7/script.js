const ACCESS_KEY = "RRPcVsnSJ1f5KOL-X6x3csdyrZD5BmM9nhnWmCV1cY8"; // put your access key from unsplash developers here

const searchInput = document.getElementById("search-input");
const xhrBtn = document.getElementById("xhr-btn");
const promisesBtn = document.getElementById("promises-btn");
const asyncBtn = document.getElementById("async-btn");
const imagesContainer = document.getElementById("images");
const message = document.getElementById("message");


// makes the link we send the request to
function getUrl(keyword) {
    let url = "https://api.unsplash.com/search/photos";
    let params = "query=" + encodeURIComponent(keyword) + "&per_page=8&orientation=portrait&client_id=" + ACCESS_KEY;
    return url + "?" + params;
}
// query = what we search for
// per_page=8 -> only 8 images (2 rows of 4)
// orientation=portrait -> long images like the picture in the lab
// client_id = our access key (same as api_key in the giphy example in the slides)
// encodeURIComponent so spaces and arabic letters dont break the link


// draw the images on the page :

function processResponse(resp) {
    if (resp.results.length === 0) {
        message.textContent = "No images found"; // the api returned an empty array
        return;
    }

    for (let item of resp.results) {
        let imgElement = document.createElement("img"); // create an img for each photo
        imgElement.src = item.urls.small; // the api gives different sizes, small is enough for the grid
        imgElement.alt = item.alt_description; // the description of the photo
        imagesContainer.appendChild(imgElement);
    }
}
// the api returns an object like this:
// { total: 1000, total_pages: 100, results: [ {urls: {small: "...", full: "..."}, alt_description: "...", ...}, ... ] }
// so the images are inside resp.results


// 1) XHR :

xhrBtn.addEventListener("click", function () {
    // clear previous search results
    imagesContainer.innerHTML = "";
    message.textContent = "";
    fetchUnsplash_UsingXHR(searchInput.value);
});

function fetchUnsplash_UsingXHR(keyword) {
    if (!keyword) {
        return; // dont search if the input is empty
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return; // 4 = DONE, wait until the request is finished
        if (xhr.status === 200) {
            processResponse(JSON.parse(xhr.responseText)); // xhr gives us text so we turn it into an object
        } else {
            message.textContent = "Error: " + xhr.status; // ex: 401 means the key is wrong
        }
    };
    xhr.open("GET", getUrl(keyword), true); // true = asynchronous
    xhr.send();
}
// readyState goes 0 -> 1 -> 2 -> 3 -> 4 and onreadystatechange runs every time it changes
// thats why we only do something when it reaches 4 (DONE)


// 2) fetch with promises :

promisesBtn.addEventListener("click", function () {
    // clear previous search results
    imagesContainer.innerHTML = "";
    message.textContent = "";
    fetchUnsplash_UsingFetch(searchInput.value);
});

function fetchUnsplash_UsingFetch(keyword) {
    if (!keyword) {
        return;
    }

    fetch(getUrl(keyword), { method: "GET" })
        .then((response) => response.json()) // json() turns the response into an object (it also returns a promise)
        .then((data) => processResponse(data))
        .catch((e) => {
            console.error(e);
            message.textContent = "Something went wrong"; // ex: wrong key or no internet
        });
}
// fetch returns a promise right away
// .then runs when the promise is fulfilled, .catch runs if something fails


// 3) fetch with async/await :

asyncBtn.addEventListener("click", function () {
    // clear previous search results
    imagesContainer.innerHTML = "";
    message.textContent = "";
    fetchUnsplash_UsingFetchAsyncAwait(searchInput.value)
        .catch((e) => {
            console.error(e);
            message.textContent = "Something went wrong";
        });
});

async function fetchUnsplash_UsingFetchAsyncAwait(keyword) {
    if (!keyword) {
        return;
    }

    let response = await fetch(getUrl(keyword), { method: "GET" }); // await waits for the response before going to the next line
    let data = await response.json();
    processResponse(data);
}
// same as the promises one but without .then().then()
// await only works inside an async function
// an async function returns a promise, thats why we can put .catch() when we call it


// keyboard event: pressing Enter in the input searches (with async/await)
searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        asyncBtn.click(); // same as clicking the async/await button
    }
});


// mouse events on the images (event delegation like lab 5) :

imagesContainer.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "IMG") {
        event.target.classList.add("zoom"); // image gets a bit bigger
    }
});

imagesContainer.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "IMG") {
        event.target.classList.remove("zoom");
    }
});
// one listener on the container instead of one on every image
// it works for the new images too because the event bubbles up to the container