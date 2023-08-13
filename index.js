var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}
var typed = new Typed('#element', {
    strings: ['Video Editor', 'Android Developer', 'Gamer', 'Web Developer...'],
    typeSpeed: 50,
  });