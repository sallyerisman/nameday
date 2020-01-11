const searchForm = document.querySelector("#search-form");

//Function for rendering date of specific name day
const renderDay = (name, nameSearch) => {

    name.results.forEach(nameEl => {
        nameSearch = nameSearch[0].toUpperCase() + nameSearch.slice(1);

        document.querySelector("#result-wrapper").innerHTML = `
            <div class="col-sm-12 col-md-10 col-lg-8 result">
                <h1 class="title">${nameSearch}</h1>
                <p class="card-text">has a name day on ${nameEl.day}/${nameEl.month}</p>
                <p class="card-text">All names celebrating their name day on this day: ${nameEl.name}.</p>
            </div>
        `;
    })
};

// //Function for rendering name days on a specific day
const renderNames = (date, country, month, day) => {

    // const namedaysByCountry = date.data.map(names => {
    //     `${names.namedays}.${country} has a name day!`
    // });

    // console.log(`Get:${date.data[0].namedays}.${country}`);
  
    document.querySelector("#result-wrapper").innerHTML = `
    <div class="col-sm-12 col-md-10 col-lg-8 result">
        <h1 class="title">${day}/${month}</h1>
        <p class="card-text">This is the name day of: ${date.data[0].namedays.us}.</p>
    </div>
    `;   
};

// Event listener for radio buttons
document.querySelector(".radio-buttons").addEventListener("click", function(e) {
    
    const nameSearch = document.querySelector("#name-search");
    const dateSearch = document.querySelector("#date-search");
    const byName = document.querySelector("#by-name");
    const byDate = document.querySelector("#by-date");

    if (byName.checked) {
        nameSearch.classList.add("show");
        dateSearch.classList.remove("show");

	} else if (byDate.checked) {
        dateSearch.classList.add("show");
        nameSearch.classList.remove("show");
    }
});

// Event listener for submit button
searchForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const country = document.querySelector("#country").value;
    
    const inputName = document.querySelector("#name");
    const nameSearch = inputName.value;
    inputName.value = "";

    if (day & month) {
        getNamesByDay(country, month, day)
		.then(date => {
            if(200) {
                renderNames(date, country, month, day);
            } else {
                console.log("Error, not 200");
            } 
		})
		.catch(err => {
			console.log("Error:", err);
    	});
    } else if (inputName) {
        getDayByName(nameSearch, country)
		.then(name => {
            if(200) {
                renderDay(name, nameSearch);
            } else {
                console.log("Error, not 200");
            }   
		})
		.catch(err => {
			console.log("Error:", err);
        });
        
    } else {
        console.log("You did not select an option");
    }
});