let someVariable: string;
let someElement = document.getElementById("someElement");
// console.log(someVariable); // undefined
// console.log(someElement); // null

const someUsers = [
  { name: "Mehedi", age: 30 },
  { name: "Hasan", age: 20 },
];
const specificUser = someUsers.find((user) => user.name === "Megamind");
// console.log(specificUser); // undefined
let saveBtn: HTMLElement = document.getElementById("savebtn")!;
// console.log(saveBtn); // null
