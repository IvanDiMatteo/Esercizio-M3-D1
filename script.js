// EXTRA 1

let twitrem = document.getElementsByClassName("list-unstyled")[1];
twitrem = twitrem.children[1].innerText = ""

/* let twitrem = document.querySelectorAll("aside div.p-4")[2].lastElementChild.querySelectorAll("li")[1];
console.log(twitrem); */

// EXTRA 2

let linkrem1 = document.getElementsByClassName("col-md-6")[1];

let linkrem2 = document.getElementsByClassName("col-md-6")[2];

let keepread1 = linkrem1.getElementsByClassName("stretched-link")[0];

keepread1.addEventListener("click", () => {
    linkrem1.remove();
});

let keepread2 = linkrem2.getElementsByClassName("stretched-link")[0];

keepread2.addEventListener("click", () => {
    linkrem2.remove();
});

// EXTRA 3

let autori = document.querySelectorAll(".blog-post-meta a");

for (const autore of autori) {
    autore.addEventListener("mouseover", () => {
        alert(autore.innerText)
    });
}