"use strict";
function printStrings(str) {
    // in js null is also object so typegurad in ts is helping to cover corner cases, at first checking isnot null
    if (str && typeof str === "object") {
        for (const s of str) {
            console.log(s);
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
    else {
        console.log("Pass array of string or string as argument");
    }
}
function printAge(person) {
    if (person.age) {
        console.log(person.age);
    }
    else {
        console.log("Age is unknown.");
    }
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2; // TS knows that it is Square, no need to check
    }
}
// in Operator Narrowing
function getAreaAlternative(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2; // TS knows that it is Square, no need to check
    }
}
// instanceOf Type Guards
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    getPrice() {
        return this.price;
    }
}
class Clothings extends Product {
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }
    getPrice() {
        return this.price;
    }
}
function displayDetails(product) {
    console.log("Name: " + product.name);
    console.log("Price: " + product.price);
    if (product instanceof Electronics) {
        console.log("Warranty: " + product.warranty);
    }
    else if (product instanceof Clothings) {
        console.log("Size: " + product.size + " Material: " + product.material);
    }
}
