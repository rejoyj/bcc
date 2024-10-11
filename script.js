document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    let navbarCollapse = document.querySelector("#navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

document.addEventListener("click", function (event) {
  let navbar = document.querySelector("#navbarSupportedContent");
  let navbarToggler = document.querySelector(".navbar-toggler");
  let isClickInsideNavbar = navbar.contains(event.target);

  if (!isClickInsideNavbar && navbar.classList.contains("show")) {
    navbarToggler.click(); // Collapse the navbar
  }
});
