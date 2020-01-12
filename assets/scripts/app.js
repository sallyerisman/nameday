/*
* NAME DAY APP
* Main script
*/

const searchForm = document.querySelector("#search-form");
const resultWrapper = document.querySelector("#result-wrapper");

const renderNoMatch = () => {
    resultWrapper.innerHTML = `<div class="alert alert-warning">Tyvärr, vi kunde inte hitta en namnsdag för detta namn.</div>`;
};

// Function for rendering error message
const renderError = () => {
    resultWrapper.innerHTML = `<div class="alert alert-danger">Sökning misslyckades: Det gick inte att hämta data för denna begäran.</div>`;
};

//Function for rendering date of specific name day
const renderDay = (name, nameSearch) => {
    // Capitalize name input
    nameSearch = nameSearch[0].toUpperCase() + nameSearch.slice(1);
    name.results.forEach(nameEl => {
            resultWrapper.innerHTML = `
            <div class="col-sm-12 col-md-10 col-lg-8 result">
                <h2 class="title">${nameSearch}</h2>
                <p class="card-text">har namnsdag den ${nameEl.day}/${nameEl.month}</p>
                <p class="card-text">Här är alla som har namnsdag denna dag: ${nameEl.name}.</p>
                <img class="cake" src="assets/images/cake.png" alt="Cake"> 
            </div>
            `;
    });
};

//Function for rendering name days on a specific day
const renderNames = (date, country, month, day) => {
    resultWrapper.innerHTML = `
    <div class="col-sm-12 col-md-10 col-lg-8 result">
        <h2 class="title">${day}/${month}</h2>
        <p class="card-text">På denna dag har ${date.data[0].namedays[country]} namnsdag!</p>
        <img class="cake" src="assets/images/cake.png" alt="Cake">  
    </div>
    `;   
};

//Function for rendering who has a name day today
const renderNameday = (date, country) => {

    resultWrapper.innerHTML = `
    <div class="col-sm-12 col-md-10 col-lg-8 result">
        <h2 class="title">GRATTIS</h2>
        <p class="card-text">${date.data[0].namedays[country]} på namnsdagen!</p>
        <img class="cake" src="assets/images/cake.png" alt="Cake">  
    </div>
    `;   
};

// Event listener for radio buttons
document.querySelector(".radio-buttons").addEventListener("click", function(e) {
    
    if (document.querySelector("#by-name").checked) {
        document.querySelector("#name-search").classList.add("show");
        document.querySelector("#date-search").classList.remove("show");
        document.querySelector("#timezone-selection").classList.remove("show");
        document.querySelector("#todays").classList.remove("show");    

	} else if (document.querySelector("#by-date").checked) {
        document.querySelector("#date-search").classList.add("show");
        document.querySelector("#timezone-selection").classList.add("show");
        document.querySelector("#todays").classList.add("show");         
        document.querySelector("#name-search").classList.remove("show");
    }
});

// Event listener for cake button
document.querySelector(".todays").addEventListener("click", function(e) {
   
    const timezone = document.querySelector("#timezone").value;
    const country = document.querySelector("#country").value;
    
    getTodaysNamedays(country, timezone)
		.then(date => {
            if(200) {
                renderNameday(date, country);
            } else {
                renderError();
            } 
		})
		.catch(renderError);
});

// Event listener for submit button
searchForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const nameSearch = document.querySelector("#name").value;
    const country = document.querySelector("#country").value;

    if (nameSearch) {
        getDayByName(nameSearch, country)
		.then(name => {
            if(200) {
                if (name.results.length > 0) {
                    renderDay(name, nameSearch);
                } else {
                    renderNoMatch();
                }                
            } else {
                renderError();
            }   
		})
        .catch(renderError);
    } else if (day) {
        getNamesByDay(country, month, day)
		.then(date => {
            if(200) {
                renderNames(date, country, month, day);
            } else {
                renderError();
            } 
		})
		.catch(renderError);  
    } else {
        resultWrapper.innerHTML = `<div class="alert alert-warning">Sökning misslyckades. Vänligen sök på antingen namn eller datum.</div>`;
    }
    searchForm.reset();
});