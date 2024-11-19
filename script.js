const body = document.querySelector("body"),
    header = document.querySelector("header"),
    headerButton = document.querySelector(".button_burger"),
    nav = document.querySelector(".nav"),
    navItem = document.querySelectorAll(".item__link");

headerButton.addEventListener("click", () => {
    headerButton.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    body.classList.toggle("lock-screen");
    header.toggleAttribute("style", "padding-right: 17px")
});

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        headerButton.classList.remove("burger_active");
        nav.classList.remove("nav_active");
        body.classList.remove("lock-screen");
        header.removeAttribute("style", "padding-right: 17px");
    });
});