
const inputName = document.querySelector('#name');
const inputDate = document.querySelector('#date');

// Function for getting user search and empytying the search field
const getSearch = function() {   
    if (inputName.value) {
        const nameSearch = inputName.value;
        inputName.value = "";
        return nameSearch;
    } else if (inputDate.value) {
        const dateSearch = inputDate.value;
        inputDate.value = "";
        return dateSearch;
    }
}
