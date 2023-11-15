import '../css/style.css'
import {girl, boy} from "./menu.js";

function card(el) {
    document.querySelector(".container").insertAdjacentHTML(
        'beforeend',
        `<div class="gallery"> 
        <h2 class="cardname"> ${el.group} </h2>  
        <img class="image" src="${el.img}" alt""></img> 
        <h3 class="price"> ${el.price} </h3> 
        </div>`
        )
    }
girl.forEach(el => card(el));
boy.forEach(el => card(el));


