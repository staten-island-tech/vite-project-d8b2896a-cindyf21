import "../css/style.css";
import "./dom.js";

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
