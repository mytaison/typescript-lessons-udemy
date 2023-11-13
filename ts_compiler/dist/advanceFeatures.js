"use strict";
// checkingCompatibility
// type casting
const numbers = {
    x: 10,
    y: {
        z: 13,
    },
};
// alternate way
const numbersAlternate = {
    x: 10,
    y: {
        z: 13,
    },
};
function nextDayOfAWeekDay(givenDay) {
    switch (givenDay) {
        case "Mon":
            return "Tues";
        case "Tues":
            return "Wed";
        case "Wed":
            return "Thurs";
        case "Thurs":
            return "Fri";
        // If any of the weekdays is missing from case match , typescript will throw an error
        case "Fri":
            return "Sat";
    }
}
let cat = {
    type: "cat",
    purrs: true, // if type is cat only then purrs can be property
};
let dog = {
    type: "dog",
    barks: true, // if type is dog only then barks can be property
};
function animalReaction(animal) {
    switch (animal.type) {
        case "cat":
            console.log("The animal is cat and it purrs");
            break;
        case "dog":
            console.log("The animal is dog and it barks");
            break;
    }
}
function fetchUserDetails(name) {
    return new Promise((res, rej) => {
        if (name) {
            res({
                id: 23,
                name: "John",
                servicesList: {
                    count: 2,
                    services: [
                        {
                            id: 1,
                            name: "Accounting",
                            price: 123,
                        },
                        {
                            id: 2,
                            name: "Design",
                            price: 100,
                        },
                    ],
                },
            });
        }
        else {
            rej(new Error("Pass a valid name."));
        }
    });
}
function printServiceList(services) {
    console.log(services);
}
const result = fetchUserDetails("John")
    .then((data) => {
    console.log(data);
    printServiceList(data.servicesList);
})
    .catch((err) => console.error(err));
// typeOf operator
let greeting = "Hello World!";
let post_greeting;
const user = {
    name: "John",
    age: 32,
};
const tom = {
    name: "Tom",
    age: 32,
};
// mapped types
let numbersX = [1, 2, 3, 4, 5];
let stringNumbers = numbersX.map((x) => x.toString());
const artist = {
    id: 1,
    name: "Michael Jackson",
    bio: "Hi! I am MJ",
};
const editedArtist = {
    id: 1,
    bio: "MJ: This is it!",
};
// Inferring return type of a function
function returnString() {
    return "string";
}
// Inferring Function Arguments
function personFunc(name, age) {
    return {
        name: name,
        age: age,
    };
}
// Satisfies Operator
const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0],
};
const colorX = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [255, 255, 0],
};
const redComponent = colorX.red[0];
const greenValue = colorX.green.toUpperCase();
