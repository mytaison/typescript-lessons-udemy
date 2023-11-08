// After checking the type, typescript will not show error
function multiplyByTwo(number: unknown) {
  if (typeof number === "number") return number * 2;
  else return "Please provide a valid number.";
}
console.log(multiplyByTwo(4));
console.log(multiplyByTwo("john"));
