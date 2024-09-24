const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]

function findMatching(drivers, string) {
    const searchString = string.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().includes(searchString));
}

// Call the function with a search string
const searchString = "sa";
const matchingDrivers = findMatching(drivers, searchString);

console.log(matchingDrivers); 

function fuzzyMatch(drivers, letters) {
    const lowerCaseLetters = letters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseLetters));
}

const startingLetters = "sa";
const otherMatchingDrivers = fuzzyMatch(drivers, startingLetters);

console.log(otherMatchingDrivers);

function matchName(drivers, name) {
    return drivers.filter(driver => {
        if (typeof driver === 'object' && driver !== null && 'name' in driver) {
            return driver.name.toLowerCase() === name.toLowerCase();
        }
        return false;
    });
}