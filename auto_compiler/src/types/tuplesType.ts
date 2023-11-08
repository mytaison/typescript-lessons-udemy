// firstname, lastname, age
let personType: [string, string, number?];
personType = ["John", "Doe"];

type listOfStudents = [number, boolean, ...string[]];
const passingStudents: listOfStudents = [3, true, "Mehedi", "Adnan", "Shoaib"];
const failingStudents: listOfStudents = [2, false, "Prithvi", "Niloy"];
