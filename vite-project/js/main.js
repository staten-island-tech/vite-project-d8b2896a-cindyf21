import '../css/style.css'
import {kpop} from "./menu.js";

function card(arr) {
    document.querySelector(".container").insertAdjacentHTML(
        'beforeend',
        `<div class="gallery"> 
        <h2 class="cardname"> ${el.group} </h2>  
        <img class="image" src="${el.img}" alt""></img> 
        <h3 class="price"> ${el.price} </h3> 
        </div>`
        )
    }
card(arr);

DOMSelectors.girlgroup.addEventListener("click", function (event) {
    clearfields();
    const girl = kpop.filter((el) => el.bg.includes("Girl Group"))
    girlgroup(girl);
});
  
function girlgroup() {
    const girl = kpop.filter((el) => el.bg.includes("Girl Group"))
    console.log(girl)
};
  
