function toggleNavbar() {
    var burgerMenu = document.getElementById("menu");
    console.log("clicked");
    if (burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
    }
}

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    autoplay: {
        delay: 5000,
    },
});