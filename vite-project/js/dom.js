import "../css/style.css";
import {menu} from "./menu.js";

const DOMSelectors = {
  output: document.getElementById("output"),
  theme: document.getElementById("theme"),
  fullmenu: document.getElementById("fullMenu"),
  girlgroup: document.getElementById("girlgroup"),
  boygroup: document.getElementById("boygroup"),
  thirdgen: document.getElementById("thirdgen"),
  fourthgen: document.getElementById("fourthgen"),
};
export{DOMSelectors};

function initial() {
  menu.forEach((item) => {
    DomSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-card" id="${item.group}">
      <h5 class="memu-item">${item.group}</h5>
      <img class="img" src=${item.img} alt="" class="menu-img">
      <h5 class="item-price">$${item.price}</h5>
      <button class="btn" id="addtocart"> Add To Cart </button>
      </div>`
    );
  });
}

function girlgroup() {
  menu.filter((girlgroup) => girlgroup.bg.includes("Girl Group"))
  menu.forEach((girlgroup) => {
    DomSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-card" id="${girlgroup.group}">
      <h5 class="menu-item">${girlgroup.group}</h5>
      <img class="img" src=${girlgroup.img} alt="" class="menu-img">
      <h5 class="item-price">$${girlgroup.price}</h5>
      <button class="btn" id="addtocart"> Add To Cart </button>
      </div>`
    );
  });
}

function boygroup() {
  menu.filter((boygroup) => boygroup.bg.includes("Boy Group"))
  menu.forEach((boygroup) => {
    DomSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-card" id="${boygroup.group}">
      <h5 class="menu-item">${boygroup.group}</h5>
      <img class="img" src=${boygroup.img} alt="" class="menu-img">
      <h5 class="item-price">$${boygroup.price}</h5>
      <button class="btn" id="addtocart"> Add To Cart </button>
      </div>`
    );
  });
}

function thirdgen() {
  menu.filter((thirdgen) => thirdgen.gen.includes("3rd Generation"))
  menu.forEach((thirdgen) => {
    DomSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-card" id="${thirdgen.group}">
      <h5 class="menu-item">${thirdgen.group}</h5>
      <img class="img" src=${thirdgen.img} alt="" class="menu-img">
      <h5 class="item-price">$${thirdgen.price}</h5>
      <button class="btn" id="addtocart"> Add To Cart </button>
      </div>`
    );
  });
}

function fourthgen() {
  menu.filter((fourthgen) => fourthgen.gen.includes("4th Generation"))
  menu.forEach((fourthgen) => {
    DomSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-card" id="${fourthgen.group}">
      <h5 class="menu-item">${fourthgen.group}</h5>
      <img class="img" src=${fourthgen.img} alt="" class="menu-img">
      <h5 class="item-price">$${fourthgen.price}</h5>
      <button class="btn" id="addtocart"> Add To Cart </button>
      </div>`
    );
  });
}

function clear() {
  DomSelectors.output.innerHTML = "";
}

initial();

document.getElementById("fullMenu").addEventListener("click", function() {
  clear();
  initial();
});

document.getElementById("girlgroup").addEventListener("click", function() {
  clear();
  girlgroup();
});

document.getElementById("boygroup").addEventListener("click", function() {
  clear();
  boygroup();
});

document.getElementById("thirdgen").addEventListener("click", function() {
  clear();
  thirdgen();
});

document.getElementById("fourthgen").addEventListener("click", function() {
  clear();
  fourthgen();
});

/*
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
*/
