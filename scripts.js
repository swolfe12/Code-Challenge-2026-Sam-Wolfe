document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menu-btn");

  /* Updated toggleMenu() to toggle .visible class on the menu defined in css and 
		an is-open class on the button itself */
  function toggleMenu() {
    menu.classList.toggle("visible");
    const isOpen = menu.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  /* Click action was on menu insted of menuBtn */
  menuBtn.addEventListener("click", toggleMenu);
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });

window.onscroll = function () {
  if (window.scrollY > 500) {
    document.getElementById("back-to-top").style.display = "block";
  }
};
