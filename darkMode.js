function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode-body");
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("dark-mode-elements");
  let card = document.getElementById("card-id");
  card.classList.toggle("dark-mode-elements");
  let title = document.getElementById("navbar-title");
  title.classList.toggle("dark-mode-color");
  let img = document.getElementById("flag");
  img.classList.toggle("dark-mode-img");
}
