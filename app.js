let countryRow = document.getElementById("country-row");
let allCountries = [];

function apiFetch(url) {
  const responsePromise = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allCountries = data;
      console.log(allCountries);
    })
    .catch((err) => console.log(err));
  return responsePromise;
}

apiFetch("https://restcountries.eu/rest/v2/all").then(() =>
  createCountryCard(allCountries)
);

function createCountryCard(countries) {
  countries.forEach((country) => {
    countryRow.innerHTML += ` 
    <div class="col-12 md-col-6 lg-col-4 xl-col-3 sm-col-12">
      <div class="country-card">
        <div class="content-card">
          <img class="img-card" src="${country.flag}">
          <h3>${country.name}</h3>
          <p>Population: <span>${country.population}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
        </div>
      </div>
    </div>`;
  });
}
function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
