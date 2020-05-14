function darkMode() {
  document.body.classList.toggle("dark-mode-body");
  document.getElementById("navbar").classList.toggle("dark-mode-elements");
  document.getElementById("navbar-title").classList.toggle("dark-mode-color");
  let allImgCountry = document.querySelectorAll(".img-card");
  allCountryDark(allImgCountry, "dark-mode-img");
  let allCountryCards = document.querySelectorAll(".content-card");
  allCountryDark(allCountryCards, "dark-mode-elements");
  let allTitlesCountry = document.querySelectorAll(".content-card h3");
  allCountryDark(allTitlesCountry, "dark-mode-color");
  let detailsP = document.querySelectorAll(".content-card p");
  allCountryDark(detailsP, "dark-mode-color");
  let allInputs = document.querySelectorAll("input");
  allCountryDark(allInputs, "dark-mode-input");
}

function allCountryDark(elem, classSwitch) {
  for (let i = 0; i <= elem.length - 1; i++) {
    elem[i].classList.toggle(classSwitch);
  }
}
function changeDarkBtn() {
  let btn = document.getElementById("navBtn");
  btn.classList.toggle("dark-btn");

  let moon = document.getElementById("moon");
  if (moon.className === "far fa-moon") {
    moon.className = "fas fa-sun";
  } else {
    moon.className = "far fa-moon";
  }

  if (btn.innerText === "Dark Mode") {
    btn.innerText = "Light Mode";
  } else {
    btn.innerText = "Dark Mode";
  }
}
