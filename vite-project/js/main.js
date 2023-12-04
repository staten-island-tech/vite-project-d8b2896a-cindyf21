import "../css/style.css";
import {DOMSelectors} from "./dom.js";
import {menu} from "./menu"

document.getElementById("theme").addEventListener("click", function () {
    if (document.body.classList.contains("gray")) {
        document.body.classList.add("pink");
        document.body.classList.remove("gray");
    }
    else {
        document.body.classList.add("gray");
        document.body.classList.remove("pink");
    }
});


function initial() {
  menu.forEach((item) => {
    DOMSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="gallery"> 
        <h2 class="cardname"> ${item.group} </h2>  
        <img class="image" src="${item.img}" alt=""></img> 
        <h3 class="price"> ${item.price} </h3> 
        </div>`
    );
  });
}

initial();

function girlgroup() {
  menu.filter((girlgroup) => girlgroup.bg.includes("Girl"))
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

function boygroup() {
  menu.filter((boygroup) => boygroup.bg.includes("Boy"))
  .forEach((boygroup) => {
    DOMSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="gallery"> 
        <h2 class="cardname"> ${boygroup.group} </h2>  
        <img class="image" src="${boygroup.img}" alt=""></img> 
        <h3 class="price"> ${boygroup.price} </h3> 
        </div>`
    );
  });
}

function thirdgen() {
  menu.filter((thirdgen) => thirdgen.gen.includes("3rd"))
  .forEach((thirdgen) => {
    DOMSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="gallery"> 
        <h2 class="cardname"> ${thirdgen.group} </h2>  
        <img class="image" src="${thirdgen.img}" alt=""></img> 
        <h3 class="price"> ${thirdgen.price} </h3> 
        </div>`
    );
  });
}

function fourthgen() {
  menu.filter((fourthgen) => fourthgen.gen.includes("4th"))
  .forEach((fourthgen) => {
    DOMSelectors.output.insertAdjacentHTML(
      "beforeend",
      `<div class="gallery"> 
        <h2 class="cardname"> ${fourthgen.group} </h2>  
        <img class="image" src="${fourthgen.img}" alt=""></img> 
        <h3 class="price"> ${fourthgen.price} </h3> 
        </div>`
    );
  });
}

function clear() {
  DOMSelectors.output.innerHTML = "";
}

document.getElementById("reset").addEventListener("click", function() {
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



// function clear() {
//   const container = DOMSelectors.container;
//   container.innerHTML = '';
// }

// function initial(arr) {
//   arr.forEach((item) => {
//     DOMSelectors.output.insertAdjacentHTML(
//       "beforeend",
//       `<div class="gallery"> 
//         <h2 class="cardname"> ${item.group} </h2>  
//         <img class="image" src="${item.img}" alt=""></img> 
//         <h3 class="price"> ${item.price} </h3> 
//         </div>`
//     );
//   });
// }

// initial(menu);

// let buttons = document.querySelectorAll(".button")
// buttons.forEach((buttons) => buttons.addEventListener("click", function() {
//   let content = buttons.textContent
//   let array = menu.filter((el) => el.type.includes(content))
//   clear()
//   initial(array)
// }));

// DOMSelectors.form.addEventListener("submit", function(event) {
//   event.preventDefault();
// });



 
