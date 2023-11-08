// This function can take any type array and function
function filterArray(array: any, predicate: Function): any[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

let numbersArr = [1, 2, 3, 4, 5];
function greaterThanThree(num: number) {
  return num > 3;
}
console.log(filterArray(numbersArr, greaterThanThree));

let animals = ["cat", "dog", "cow", "goat"];
function findTheCat(animal: string) {
  return animal === "cat";
}
console.log(filterArray(animals, findTheCat));

// Function overload, problem is code repeatation & very to write function that will consider all the types
type filterArray = {
  (array: number[], predicate: (item: number) => boolean): number[];
  (array: string[], predicate: (item: string) => boolean): string[];
  (array: object[], predicate: (item: object) => boolean): object[];
};

//Alternative is Generics
