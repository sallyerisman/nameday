const searchForm = document.querySelector("#search-form");


//Function for rendering date of specific name day
// const renderDay = name => {
//     console.log("Name", name);

//     name.results.forEach(nameEl => {
//         // if (nameEl.name !== inputName[0].toUpperCase() + inputName.slice(1)) {
//         // } else {
//             document.querySelector("#result-wrapper").innerHTML = `
//             <div class="col-sm-12 col-md-10 col-lg-8 result">
//                 <h1 class="title">${nameEl.name}</h1>
//                 <p class="card-text">${nameEl.name} has a name day on ${nameEl.day}/${nameEl.month}</p>
//             </div>
//         `;
//         // }
//     })
// };

// //Function for rendering date of specific name day
const renderNames = (date, month, day) => {
    console.log("Date is", date);
    document.querySelector("#result-wrapper").innerHTML = `
    <div class="col-sm-12 col-md-10 col-lg-8 result">
        <h1 class="title">${day}/${month}</h1>
        <p class="card-text">${date.data[0].namedays.se} has a name day!</p>
    </div>
    `;   
};

// Event listener
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // const inputName = document.querySelector("#name");
    // const userSearch = inputName.value;

    // inputName.value = "";

    // getDayByName(userSearch)
	// 	.then(name => {
    //         if(200) {
    //             renderDay(name);
    //             console.log("Hello", name);
    //         } else {
    //             console.log("Error, not 200");
    //         } 
            
	// 	})
	// 	.catch(err => {
	// 		console.log("Error:", err);
	// 	});

    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;

    getNamesByDay(month, day)
		.then(date => {
            if(200) {
                renderNames(date, month, day);
                console.log("Hello", name);
            } else {
                console.log("Error, not 200");
            } 
		})
		.catch(err => {
			console.log("Error:", err);
    	});
});