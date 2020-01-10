const searchForm = document.querySelector("#search-form");


// Function for getting user search and empytying the search field
const getNameSearch = function() {   
    const inputName = document.querySelector('#name');
    const nameSearch = inputName.value;
    inputName.value = "";
    return nameSearch;
};

// Function for getting user search and empytying the search field
const getDateSearch = function() {   
    const inputDate = document.querySelector('#date');
    const dateSearch = inputDate.value;
    inputDate.value = "";
    return dateSearch;
};


//Function for rendering date of specific name day
const renderDay = name => {

    name.results.forEach(nameEl => {
        if (nameEl.name !== "Anna") {
            return; 
        } else {
            document.querySelector("#result-wrapper").innerHTML = `
            <div class="col-sm-12 col-md-10 col-lg-8 result">
                <h1 class="title">${nameEl.name}</h1>
                <p class="card-text">${nameEl.name} has a name day on ${nameEl.day} ${nameEl.month}</p>
            </div>
        `;
        }
    })
};

// Event listener:
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

	getDayByName(getSearch())
		.then(name => {
            renderDay(name);
		})
		.catch(err => {
			alert("Error:", err);
		});

});