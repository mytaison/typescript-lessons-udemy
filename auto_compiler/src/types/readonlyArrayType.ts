let numbers: readonly number[] = [1, 2, 3];
// Push will show error as it is readonly
// numbers.push(1)

type readonlyPersons = readonly [string, string, number];
const personZ: readonlyPersons = ["John", "Smith", 32];

type readonlyA = readonly string[];
type readonlyB = readonly [...string[]];

const roA = ["Mehedi", "Hasan", "Megamind"];
const roB = ["Mehedi", "Hasan", "Megamind"];
console.log(roA);
console.log(roB);
