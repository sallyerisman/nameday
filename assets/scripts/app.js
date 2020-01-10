const searchForm = document.querySelector("#search-form");
const day = document.querySelector('#day').value;
const month = document.querySelector('#month').value;
let inputName = document.querySelector('#name').value;

//Function for rendering date of specific name day
const renderDay = name => {

    name.results.forEach(nameEl => {
        if (nameEl.name !== inputName[0].toUpperCase() + inputName.slice(1)) {
            console.log("Soory, no name day"); 
        } else {
            document.querySelector("#result-wrapper").innerHTML = `
            <div class="col-sm-12 col-md-10 col-lg-8 result">
                <h1 class="title">${nameEl.name}</h1>
                <p class="card-text">${nameEl.name} has a name day on ${nameEl.day}/${nameEl.month}</p>
            </div>
        `;
        }
    })
};


//Function for rendering date of specific name day
// const renderNames = date => {
//     document.querySelector("#result-wrapper").innerHTML = `
//     <div class="col-sm-12 col-md-10 col-lg-8 result">
//         <h1 class="title">${day}/${month}</h1>
//         <p class="card-text">${date.data[0].namedays.se} has a name day!</p>
//     </div>
//     `;   
// };

// Event listener:
// searchForm.addEventListener('submit', function(e) {
//     e.preventDefault();

// 	getDayByName(getSearch())
// 		.then(name => {
//             renderDay(name);
// 		})
// 		.catch(err => {
// 			alert("Error:", err);
// 		});

// });

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

	// getNamesByDay(month, day)
	// 	.then(date => {
    //         renderNames(date);
	// 	})
	// 	.catch(err => {
	// 		alert("Error:", err);
    // 	});
    
    	getDayByName(inputName)
		.then(name => {
            renderDay(name);
		})
		.catch(err => {
			alert("Error:", err);
		});

});