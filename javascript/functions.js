function toggleNavbar() {
    var burgerMenu = document.getElementById("menu");
    console.log("clicked");
    if (burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
    }
}