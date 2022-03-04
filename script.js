

//---------------Chat Details (fetch 1)------------
const loadDetails = () => {
    fetch('https://disease.sh/v3/covid-19/all')
        .then(res => res.json())
        .then(data => covid19(data));
}
loadDetails();

//-----------------------Chart Section--------------

const covid19 = covid => {


    const caseDiv = document.getElementById('case');
    caseDiv.innerHTML = `
            <h3 class="text-center text-uppercase text-light">Cases Sheet</h3>
            <h3 class='text-light'>Cases: ${covid.cases}</h3>
            <h4 class='text-light'>Active Cases: ${covid.active}</h4>
            <h4 class='text-light'>Today Cases: ${covid.todayCases}</h4>   
            <h4 class='text-light'>Active Per 1M: ${covid.activePerOneMillion}</h4>
                  `

    const recoverDiv = document.getElementById('recover');
    recoverDiv.innerHTML = `
            <h3 class="text-center text-uppercase text-light">Recover Sheet</h3>
            <h3 class='text-light'>Recovered: ${covid.recovered}</h3>
            <h4 class='text-light'>Today Recovered: ${covid.todayRecovered}</h4>
            <h4 class='text-light'>Recovered Per 1M: ${covid.recoveredPerOneMillion}</h4>
  `
    const deathDiv = document.getElementById('death');
    deathDiv.innerHTML = `
              <h3 class="text-center text-uppercase text-light">Death Sheet</h3>
              <h3 class='text-light'>Death: ${covid.deaths}</h3>
              <h4 class='text-light'>Today Deaths: ${covid.todayDeaths}</h4>
              <h4 class='text-light'>Deaths Per 1M: ${covid.deathsPerOneMillion}</h4>
              <h4 class='text-light'>Affected Countries: ${covid.affectedCountries}</h4>
   `
    const testDiv = document.getElementById('test');
    testDiv.innerHTML = `
    <h3 class="text-center text-uppercase text-light">Test Sheet</h3>          
    <h3 class='text-light'>Tests: ${covid.tests}</h3>
    <h4 class='text-light'>Cases Per 1M: ${covid.casesPerOneMillion}</h4>
    <h4 class='text-light'>Tests Per 1M: ${covid.testsPerOneMillion}</h4>
    <h4 class='text-light'>Critical: ${covid.critical}</h4>
    
 `
}


//--------------Country Details (fetch 2)------------

const search = () => {
    document.getElementById('main').innerHTML = '';
    const countryValue = document.getElementById('country').value;
    const errorMessageDiv = document.getElementById("error");
    errorMessageDiv.textContent = '';

    const url = `https://disease.sh/v3/covid-19/countries/${countryValue}`


    fetch(url)
        .then(res => res.json())
        .then(data => coronaVirus(data));



}

//-----------------country search result-----------
const coronaVirus = (virus) => {

    if (virus.message == "Country not found or doesn't have any cases") {
        const errorMessageDiv = document.getElementById("error");

        errorMessageDiv.innerHTML = `
                <p class="text-center fs-3 fw-bold bg-danger text-light mx-5">Sorry! Unvalid Result.</p>
    
              `;
        searchVirus.textContent = '';
    }
    const searchVirus = document.getElementById('main');

    searchVirus.innerHTML = `
                
                    <h3 class="text-center text-light">Result</h3>
                    <img src="${virus.countryInfo.flag}" alt="">
                    <h3 class='text-light'>${virus.country}</h3>
                    <h4 class='text-light'>Total Population: ${virus.population}</h4>
                    <h4 class='text-light'>Cases: ${virus.cases}</h4>
                    <h3 class='text-light'>Deaths: ${virus.deaths}</h3>
                    <h4 class='text-light'>Recovered: ${virus.recovered}</h4>
                    <h4 class='text-light'>Tests: ${virus.tests}</h4>
                    <h4 class='text-light'>Critical: ${virus.critical}</h4>
                    <h4 class='text-light'>Continent: ${virus.continent}</h4>
                    
                             
         `
}












