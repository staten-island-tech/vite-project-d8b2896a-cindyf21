import "../css/style.css";
import "./dom";

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