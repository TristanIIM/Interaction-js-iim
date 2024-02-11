document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  });
});

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");

  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let pseudo = document.querySelector("#pseudo");

  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le pseudo doit faire au moins 6 caractères";
    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;
  let password = document.querySelector("#password");

  if (password.value.length < 10 || !passCheck.test(password.value)) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit faire au moins 10 caractères et doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.";
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  let passwordConfirm = document.querySelector("#passwordConfirm");

  if (
    passwordConfirm.value !== password.value ||
    passwordConfirm.value === ""
  ) {
    errorContainer.classList.add("visible");
    passwordConfirm.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Les 2 mots de passe ne sont pas identiques.";
    errorList.appendChild(err);
  } else {
    passwordConfirm.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", options);

let filterItems = document.querySelectorAll(".filters li");

filterItems.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    filterItem.classList.add("active");
  });
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
