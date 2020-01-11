/*
* NAME DAY APP
* Script for fetching API data
*/

// Fetch API data based on name search
const getDayByName = async(name, country) => {
    // Get date of a specific name day
    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);

    // Convert response from JSON
    const day = await response.json();

    return day;
};

// Fetch API data based on date search
const getNamesByDay = async(country, month, day) => {
    // Get name day on a specific date
    const response = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);

    // Convert response from JSON
    const names = await response.json();

    return names;
};
