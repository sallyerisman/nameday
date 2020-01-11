const searchForm = document.querySelector("#search-form");


//Function for rendering date of specific name day
// const renderDay = (name, userSearch) => {

//     name.results.forEach(nameEl => {
//         userSearch = userSearch[0].toUpperCase() + userSearch.slice(1);

//         document.querySelector("#result-wrapper").innerHTML = `
//             <div class="col-sm-12 col-md-10 col-lg-8 result">
//                 <h1 class="title">${userSearch}</h1>
//                 <p class="card-text">has a name day on ${nameEl.day}/${nameEl.month}</p>
//                 <p class="card-text">All names celebrating their name day on this day: ${nameEl.name}.</p>
//             </div>
//         `;
//     })
// };

// //Function for rendering date of specific name day
const renderNames = (date, country, month, day) => {

    // const namedaysByCountry = date.data.map(names => {
    //     `${names.namedays}.${country} has a name day!`
    // });

    // console.log(`Get:${date.data[0].namedays}.${country}`);
  
    document.querySelector("#result-wrapper").innerHTML = `
    <div class="col-sm-12 col-md-10 col-lg-8 result">
        <h1 class="title">${day}/${month}</h1>
        <p class="card-text">Names: ${date.data[0].namedays.se} has a name day!</p>
    </div>
    `;   
};

// Event listener
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const country = document.querySelector("#country").value;
    const inputName = document.querySelector("#name");
    const userSearch = inputName.value;

    inputName.value = "";

    // getDayByName(userSearch, country)
	// 	.then(name => {
    //         if(200) {
    //             renderDay(name, userSearch);
    //             console.log("All is well");
    //         } else {
    //             console.log("Error, not 200");
    //         } 
            
	// 	})
	// 	.catch(err => {
	// 		console.log("Error:", err);
	// 	});


    getNamesByDay(country, month, day)
		.then(date => {
            if(200) {
                renderNames(date, country, month, day);
                console.log("All is well");
            } else {
                console.log("Error, not 200");
            } 
		})
		.catch(err => {
			console.log("Error:", err);
    	});
});