import {kpop} from "./menu.js";

const DOMSelectors = {
  gallery: document.getElementById("gallery"),
  girlgroup: document.getElementById("girlgroup"),
  boygroup: document.getElementById("boygroup"),
  thirdgen: document.getElementById("thirdgen"),
  fourthgen: document.getElementById("fourthgen"),
};

DOMSelectors.girlgroup.addEventListener("click", function (event) {
    event.preventDefault();
   
});

function girlgroup() {
const girl = kpop.filter((el) => el.bg === "Girl Group");
girl.forEach((el) => {
    console.log(`${el.group}`)
})
};