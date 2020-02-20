console.log("hello");

// function setColour() {
//   theValue.style.backgroundColor = colorPicker.value;
// }

const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

function toggleMenu() {
  menuNav.classList.toggle("menu-nav");
  console.log("called toggleMenu");
}
menuToggle.addEventListener("click", toggleMenu);
