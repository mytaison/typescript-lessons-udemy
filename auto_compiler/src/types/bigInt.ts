let bigInt = BigInt(12345);
let bigInt2 = 123456n;
console.log(bigInt);
console.log(bigInt2);
// Why regular integer is not safe for big calculation
let safeInt = Number.MAX_SAFE_INTEGER;
let safeIntPlusOne = safeInt + 1;
let safeIntPlusTwo = safeInt + 2;
console.log(safeInt); //9007199254740991
console.log(safeIntPlusOne); //9007199254740992
console.log(safeIntPlusTwo); //9007199254740992
// This is true but logically should be false.
// It is true due to safeInt + 1 actually stuck in max value. so + 2 didn't increase more than +1
console.log(safeIntPlusOne === safeIntPlusTwo);

let a: bigint = BigInt(123458);
let b: bigint = BigInt(2345678n);
let c: bigint = a - b;
console.log(c);
// big int can't have decimal values
// let d: bigint = BigInt(1234.56n)
// Cannot use builtIn Math Objects with BigInts
// let f = Math.log(b)
