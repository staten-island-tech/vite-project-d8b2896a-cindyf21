import "../css/style.css";
import "./dom.js";
import {menu} from "./menu.js"

document.getElementById("theme").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});

function card(arr) {
    arr.forEach(el => {
      document.querySelector(".container").insertAdjacentHTML(
        'beforeend',
        `<div class="gallery"> 
        <h2 class="cardname"> ${el.group} </h2>  
        <img class="image" src="${el.img}" alt""></img> 
        <h3 class="price"> ${el.price} </h3> 
        </div>`
        )
    });
}

function clearCards() {
    const orig = document.querySelector(".container")
    orig.innerHTML=""
}

card(menu);

function groupFilter(girlgroup) {
    clearCards()
    const arr = menu.filter(el => el.bg.includes(girlgroup))
    card(arr)
}

DOMSelectors.girlgroup.addEventListener("click", function(event) {
    event.preventDefault()
    groupFilter("Girl Group");
}
)
