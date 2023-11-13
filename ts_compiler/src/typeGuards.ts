function printStrings(str: string | string[] | null): void {
  // in js null is also object so typegurad in ts is helping to cover corner cases, at first checking isnot null
  if (str && typeof str === "object") {
    for (const s of str) {
      console.log(s);
    }
  } else if (typeof str === "string") {
    console.log(str);
  } else {
    console.log("Pass array of string or string as argument");
  }
}

//Truthiness Narrowing
//null, undefined, false, 0, NaN, '' => falsy values
type PersonTruthiness = {
  name: string;
  age?: number;
};
function printAge(person: PersonTruthiness) {
  if (person.age) {
    console.log(person.age);
  } else {
    console.log("Age is unknown.");
  }
}
// printAge ({
//     name: "Mehedi Hasan",
//     age: "John" // ts is helping here to find the error. when object gets complicated it helps
// })

// Equality Narrowing
// ===
// !==
// ==
// and !=
type Circle = {
  kind: "circle";
  radius: number;
};
type Sqaure = {
  kind: "sqaure";
  sideLength: number;
};
type Shape = Circle | Sqaure;
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2; // TS knows that it is Square, no need to check
  }
}

// in Operator Narrowing
function getAreaAlternative(shape: Shape) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2; // TS knows that it is Square, no need to check
  }
}

// instanceOf Type Guards
abstract class Product {
  constructor(public name: string, public price: number) {}
  abstract getPrice(): number;
}
class Electronics extends Product {
  constructor(name: string, price: number, public warranty: number) {
    super(name, price);
  }
  getPrice(): number {
    return this.price;
  }
}
class Clothings extends Product {
  constructor(
    name: string,
    price: number,
    public size: string,
    public material: string
  ) {
    super(name, price);
  }
  getPrice(): number {
    return this.price;
  }
}
function displayDetails(product: Product): void {
  console.log("Name: " + product.name);
  console.log("Price: " + product.price);
  if (product instanceof Electronics) {
    console.log("Warranty: " + product.warranty);
  } else if (product instanceof Clothings) {
    console.log("Size: " + product.size + " Material: " + product.material);
  }
}
