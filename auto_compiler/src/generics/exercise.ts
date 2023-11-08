// Map function()
const JSMap = <T, U>(array: T[], func: (item: T) => U) => {
  // Check if item is empty
  if (array.length === 0) {
    return array;
  }
  // Create new array to collect values
  let result = [];
  // Loop through each item and call the func
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  // return new array
  return result;
};

let numberList = [1, 2, 3, 4, 5, 6, 7];
const convert = JSMap(numberList, (num) => num.toString());
console.log(convert);
