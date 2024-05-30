let isHidden = true;

let menuButton = document.querySelector(".burgerMenu");

let mobileMenu = document.querySelector(".mobileMenu");


function toggleMenu () {
    isHidden = !isHidden;

    if (isHidden) {
        mobileMenu.classList.add("displayNone");
        mobileMenu.classList.remove("displayBlock");
    } else {
        mobileMenu.classList.remove("displayNone");
        mobileMenu.classList.add("displayBlock");
    }
}


menuButton.addEventListener("click", () => {
    toggleMenu();
});