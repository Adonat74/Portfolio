// let isHidden = true;
let menuButton = document.querySelector(".burgerMenu");
let mobileMenu = document.querySelector(".mobileMenu");
let body = document.querySelector("body");


// function toggleMenu () {
//     isHidden = !isHidden;
//     if (isHidden) {
//         mobileMenu.classList.add("displayNone");
//         mobileMenu.classList.remove("displayBlock");
//         body.classList.remove("overFlowHidden");
//     } else {
//         mobileMenu.classList.remove("displayNone");
//         mobileMenu.classList.add("displayBlock");
//         body.classList.add("overFlowHidden");
//     }
// }

function toggleMenu () {
    mobileMenu.classList.toggle("displayNone");
    mobileMenu.classList.toggle("displayBlock");
    body.classList.toggle("overFlowHidden");
}


menuButton.addEventListener("click", () => {
    toggleMenu();
});