let countryRow = document.getElementById("country-row");
let searchInput = document.getElementById("search-input");
let bordersBtn = document.createElement("button");

let allCountries = [];

function apiFetch(url) {
  const responsePromise = fetch(url)
    .then((response) => {
      if (!response.ok) {
        alert("Sorry! We didn't find any country!");
      }
      return response.json();
    })
    .catch((err) => console.log(err));
  return responsePromise;
}

apiFetch("https://restcountries.eu/rest/v2/all").then((data) => {
  allCountries = data;
  createAllCountryCards(allCountries);
});

function createAllCountryCards(countries) {
  searchInput.value = "";
  countryRow.innerHTML = "";
  countries.forEach((country) => {
    countryRow.innerHTML += ` 
    <div class="col-12 md-col-6 lg-col-4 xl-col-3 sm-col-12">
      <div class="country-card">
      <a id="${
        country.name
      }" class="country-link" onclick="clickBorderButton(this.id)">
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

function searchCountry() {
  if (searchInput.value === "") {
    alert("The search box is empty!");
    createAllCountryCards(allCountries);
  } else {
    let countryUrl = `https://restcountries.eu/rest/v2/name/${searchInput.value}`;
    apiFetch(countryUrl).then((data) => {
      createCountryPage(data);
    });
  }
}

function createCountryPage(country) {
  countryRow.innerHTML = "";

  countryRow.innerHTML = ` 
  <div class="div-backBtn col-12 lg-col-4 md-col-6">
  <i class="fas fa-long-arrow-alt-left"></i>
   <button class="backBtn" onclick="createAllCountryCards(allCountries)">Back</button>
  </div>

  <div class="single-country row">
    <div col-12 lg-col-4 md-col-6>
      <div id="card-id" class="single-country-img">
        <img id="flag" class="img-card" src="${country[0].flag}">
      </div>
    </div>
    
     <div class="country-content col-12 lg-col-6 md-col-6">
        <div class="div-name lg-col-6 md-col-6">
          <h3>${country[0].name}</h3>
          <p>Native Name: <span>${country[0].nativeName}</span></p>
          <p>Population: <span>${country[0].population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
          <p>Region: <span>${country[0].region}</span></p>
          <p>Sub Region: <span>${country[0].subregion}</span></p>
          <p>Capital: <span>${country[0].capital}</span></p>
        </div>
        <div class="div-top lg-col-6 md-col-6">
          <p class="top-domain">Top Level Domain: <span>${
            country[0].topLevelDomain
          }</span></p>
          <p>Currencies: <span>${country[0].currencies[0].code}</span></p>
          <p>Languages: <span>${country[0].languages.map(
            (lang) => lang.name
          )}</span></p>
        </div>
      <div class="div-borders lg-col-10 md-col-10">
        <p>Border Countries: </p>
        ${country[0].borders
          .slice(0, 3)
          .map((border) => {
            allCountries.filter((country) => {
              if (country.alpha3Code.includes(border)) {
                border = country.name;
              }
            });
            return `${`<button id= "${border}" class="borders-btn" onclick="clickBorderButton(this.id)">${border}</button>`}`;
          })
          .join("")}
        </div>
        </div>
   </div>`;
}
function clickBorderButton(clicked) {
  let buttonBorder = document.getElementById(clicked).id;
  let countryUrl = `https://restcountries.eu/rest/v2/name/${buttonBorder}?fullText=true`;
  apiFetch(countryUrl).then((data) => {
    createCountryPage(data);
  });
}

function filterByOrigin() {
  apiFetch(countryUrl).then((data) => {
    createCountryPage(data);
  });
}
