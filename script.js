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
    navbarToggler.click();
  }
});

  document.addEventListener("DOMContentLoaded", function() {
    var toastEl = document.getElementById('notificationToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  });


