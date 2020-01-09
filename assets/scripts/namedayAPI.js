
// API for search by name:
// https://api.abalin.net/getdate?name=John&country=us

const getDayByName = async(name) => {
    // Get date of a specific name day
    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=se`);

    // Convert response from JSON
    const day = await response.json();

    return day;
};


// API for search by date:
// https://api.abalin.net/namedays?country=us&month=7&day=15

const getNamesByDay = async(month, day) => {
    // Get name day names on a specific date
    const response = await fetch(`https://api.abalin.net/namedays?country=se&month=${month}&day=${day}`);

    // Convert response from JSON
    const names = await response.json();

    return names;
};
