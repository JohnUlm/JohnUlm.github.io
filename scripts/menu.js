function DropDownFunc() {
    var x = document.getElementById("nav");
    if (x.className === "navlist") {
        x.className += " dropdown";
    } else {
        x.className = "navlist";
    }
}