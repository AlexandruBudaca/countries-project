let countryRow = document.getElementById("country-row");
let searchInput = document.getElementById("search-input");
function apiFetch(url) {
  const responsePromise = fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return responsePromise;
}

apiFetch("https://restcountries.eu/rest/v2/all").then((data) => {
  createCountryCards(data);
});

function createCountryCards(countries) {
  countryRow.innerHTML = "";
  countries.forEach((country) => {
    countryRow.innerHTML += ` 
    <div class="col-12 md-col-6 lg-col-4 xl-col-3 sm-col-12">
      <div class="country-card">
      <a id="aLink" class="country-link" onclick="createCountryPage()">
        <div id="card-id" class="content-card ">
          <img id="flag" class="img-card" src="${country.flag}">
          <h3>${country.name}</h3>
          <p>Population: <span>${country.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital}</span></p>
        </div>
      </div>
      </a>
    </div>`;
  });
}
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

function searchCountry() {
  if (searchInput.value === "") {
  } else {
    let countryUrl = `https://restcountries.eu/rest/v2/name/${searchInput.value}?fullText=true`;
    apiFetch(countryUrl).then((data) => {
      console.log(data);
      createCountryPage(data);
    });
  }
}

function createCountryPage(country) {
  countryRow.innerHTML = "";

  countryRow.innerHTML += ` 
    <div class="col-12 md-col-6 lg-col-4 xl-col-3 sm-col-12">
      <div class="country-card">
        <div id="card-id" class="content-card ">
          <img id="flag" class="img-card" src="${country[0].flag}">
          <h3>${country[0].name}</h3>
          <p>Population: <span>${country[0].population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
          <p>Region: <span>${country[0].region}</span></p>
          <p>Sub Region: <span>${country[0].subregion}</span></p>
          <p>Capital: <span>${country[0].capital}</span></p>
      
          <p class="top-domain">Top Level Domain: <span>${
            country[0].topLevelDomain
          }</span></p>
          <p>Currencies: <span>${country[0].currencies[0].code}</span></p>
          <p>Languages: <span>${country[0].languages.map(
            (lang) => lang.name
          )}</span></p>
          <p>Border Countries: </p>
                <div>
             <span>${country[0].borders}</span>
             </div>
          </div>
      </div>
    </div>`;
}
