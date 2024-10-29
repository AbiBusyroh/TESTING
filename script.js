const hamburger = document.getElementById ("hamburger");
const navbarUl = document.getElementById ("navbar-ul");

hamburger.addEventListener ("click", () => {
    navbarUl.classList.toggle ("navbar-ul");
});