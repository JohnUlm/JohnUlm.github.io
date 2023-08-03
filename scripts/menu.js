function DropDownFunc() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
        x.className += " dropdown";
    } else {
        x.className = "navbar";
    }
}