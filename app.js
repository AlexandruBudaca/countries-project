let container = document.getElementById("country-container");
let allCountries = [];

function apiFetch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => createCountryCard(data))
    .catch((err) => console.log(err));
}
apiFetch("https://restcountries.eu/rest/v2/all");

function createCountryCard(countries) {
  countries.forEach((country) => {
    container.innerHTML += `<div>
    <img src="${country.flag}">
    </div>`;
  });
}
// createCountryCard(allCountries);
