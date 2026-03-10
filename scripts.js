document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menu-btn");
  const backToTop = document.getElementById("back-to-top");
  const contactForm = document.getElementById("contact-form");

  /* Updated toggleMenu() to use the .is-open class
     for both the nav and the button */
  function toggleMenu() {
    const isOpen = menu.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  /* Click action was on menu instead of menuBtn */
  menuBtn.addEventListener("click", toggleMenu);

  /* Back to top visibility */
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 200) {
          backToTop.classList.add("visible");
        } else {
          backToTop.classList.remove("visible");
        }

        ticking = false;
      });

      ticking = true;
    }
  });

  /* Back to top click behavior */
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /* Updated form submit so the form does not submit
     when required fields are empty or invalid */
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    alert("Form submitted!");
  });
});
