/*
* NAME DAY APP
* Script for fetching API data
*/

// Fetch API data based on name search
const getDayByName = async(name, country) => {
    // Get date of a specific name day
    const dayResp = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);

    // Convert response from JSON
    const day = await dayResp.json();

    return day;
};

// Fetch API data based on date search
const getNamesByDay = async(country, month, day) => {
    // Get name day on a specific date
    const nameResp = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);

    // Convert response from JSON
    const names = await nameResp.json();

    return names;
};

// Fetch API data for today's name day, country and time zone
    const getTodaysNamedays = async(country, timezone) => {
    // Get name day for today
    const namedayResp = await fetch(`https://api.abalin.net/today?timezone=${timezone}&country=${country}`);    

    // Convert response from JSON
    const nameDay = await namedayResp.json();

    return nameDay;
};
