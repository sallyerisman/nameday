/*
* NAME DAY APP
* Script for fetching API data
*/

// Fetch API data based on name search
const getDayByName = async(name, country) => {
    const dayResp = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);

    if (!200) {
        throw new Error();
    } else {
        const day = await dayResp.json();
        return day;
    }
};

// Fetch API data based on date search
const getNamesByDay = async(country, month, day) => {
    const nameResp = await fetch(`https://api.abalin.net/namedays?country=${country}&month=${month}&day=${day}`);

    if (!200) {
        throw new Error();
    } else {
        const names = await nameResp.json();
        return names;
    }
};

// Fetch API data for today's name day, country and time zone
const getTodaysNamedays = async(country, timezone) => {
    const namedayResp = await fetch(`https://api.abalin.net/today?timezone=${timezone}&country=${country}`);  
    
    if (!200) {
        throw new Error();
    } else {
        const nameday = await namedayResp.json();
        return nameday;
    }
};
