import "../css/style.css";
import "./dom.js";
import {menu} from "./menu.js"
import {DOMSelectors} from "./dom"

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

// function card(arr) {
//     arr.forEach(el => {
//       document.getElementById("output").insertAdjacentHTML(
//         'beforeend',
//         `<div class="gallery"> 
//         <h2 class="cardname"> ${el.group} </h2>  
//         <img class="image" src="${el.img}" alt=""></img> 
//         <h3 class="price"> ${el.price} </h3> 
//         </div>`
//         )
//     });
// }


// card(menu);

function girlgroup() {
    menu
    .filter((girlgroup) => girlgroup.bg.includes("Girl Group"))
    .forEach((girlgroup) => {
      DOMSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery"> 
          <h2 class="cardname"> ${girlgroup.group} </h2>  
          <img class="image" src="${girlgroup.img}" alt=""></img> 
          <h3 class="price"> ${girlgroup.price} </h3> 
          </div>`
      );
    });
  }
  girlgroup();