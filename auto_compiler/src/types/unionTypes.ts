type Cat = {
  name: string;
  purrs: boolean;
};
type Dog = {
  name: string;
  wags: boolean;
  barks: boolean;
};

type CatUnionDog = Cat | Dog;

// Union type object can have only one's all properties or both's all properties
let cat: CatUnionDog = {
  name: "Toby",
  purrs: true,
};
let dog: CatUnionDog = {
  name: "Tommy",
  barks: true,
  wags: true,
};
let hybrid: CatUnionDog = {
  name: "Experiment",
  purrs: false,
  barks: false,
  wags: true,
};

// Union Types with Primitive Types
type StringOrNumber = number | string;

function addNumberOrString(a: StringOrNumber, b: StringOrNumber) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(addNumberOrString(1, 9));
console.log(addNumberOrString(1, "abcd"));
console.log(addNumberOrString("Mehedi", "Hasan"));
console.log(addNumberOrString("Mehedi", 9));
