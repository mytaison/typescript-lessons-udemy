// Alternative approach is Generics
type filterArrayAlternative = {
  <T>(array: T[], predicate: (item: T) => boolean): T[];
};
const filterArrayAlternative: filterArrayAlternative = (array, predicate) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

let numbersArray = [1, 2, 3, 4, 5];
function filterGreaterThanThree(num: number) {
  return num > 3;
}
console.log(filterArrayAlternative(numbersArray, filterGreaterThanThree));

let animalsArray = ["cat", "dog", "cow", "goat"];
function filterTheCat(animal: string) {
  return animal === "cat";
}
console.log(filterArrayAlternative(animalsArray, filterTheCat));
