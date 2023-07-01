const countryInp = document.querySelector('#country-inp');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;//quary
    // console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            const countryData = data[0]
            result.innerHTML = `
                <img src="${countryData.flags.svg}" class="flag-img" />
                <h2>${countryData.name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital:</h4>
                        <span>${countryData.capital[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continents:</h4>
                        <span>${countryData.continents[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population:</h4>
                        <span>${countryData.population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency:</h4>
                        <span>${countryData.currencies[Object.keys(countryData.currencies)].name} - ${Object.keys(countryData.currencies)[0]}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages:</h4>
                        <span>${Object.values(countryData.languages).toString().split(',').join(', ')}</span>
                    </div>
                </div>
            `;
        }).catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        })
})