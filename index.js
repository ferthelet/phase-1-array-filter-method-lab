// Code your solution here
// js

// write functions using the filter() method so that PickMeUp Taxi
// service employees can easily query the data.

function findMatching(drivers, name) {
    // takes an array of drivers' names and a string as arguments,
    // and returns the matching list of drivers. The function should 
    // be case insensitive.
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    // takes an array of drivers' names and a string as arguments
    // for querying the array, and returns all drivers whose names
    // begin with the provided letters.
    return drivers.filter((driver) => driver.startsWith(name));
}

function matchName(drivers, string) {
    // takes an array of driver objects and a string as arguments.
    // Each driver object has two properties: name and hometown. The
    // function should return each element whose name property 
    // matches the provided string argument.
    return drivers.filter((driver) => driver.name === string);
}

