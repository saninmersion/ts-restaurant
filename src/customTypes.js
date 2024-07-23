var displayInfo = function (person) {
    console.log("".concat(person.name, " lives at ").concat(person.address.street));
};
var person = {
    name: "Joe",
    age: 22,
    isStudent: true,
    address: {
        street: "St. Louis",
        city: "New York",
        country: "US"
    }
};
var person2 = {
    name: "Billy",
    age: 42,
    isStudent: false,
    address: {
        street: "St. Louis",
        city: "New York",
        country: "US"
    }
};
var person3 = {
    name: "Joel",
    age: 42,
    isStudent: false
};
displayInfo(person3);
