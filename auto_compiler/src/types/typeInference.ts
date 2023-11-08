let fname = "Mehedi Hasan Megamind";
fname = "Adnan Kamal";
// Type inference automatically typed fname with String based on first assigned value, assigning number to fname will show error
// fname = 23;
const numberX = 25;

// Example
let finalResult: number;

// No need to declare type as type inference know it is returing number type
function addNumber(a: number, b: number) {
  return a + b;
}
// type not declared, still not showing error. Due to type inference, it knows addNumber will return Number type
finalResult = addNumber(10, 23);
