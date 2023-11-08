// In javascript Class is syntaxtic sugar, we can declare class via constructor and prototype

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.points = 0;
//   }
//   addPoints() {
//     this.points++;
//     console.log(`total point`);
//   }
// }

// With new keyword, object is automatically returned and prototype inherited
function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;

  this.addPoints = () => {
    this.points++;
    console.log(`total point`);
  };
}
// Without the new keyword, we need to use Object.create() method to inheirt prototype and need to return the object
function UserWithoutNew(name, email) {
  let userWithoutNew = Object.create(User.prototype);
  userWithoutNew.name = name;
  userWithoutNew.email = email;
  userWithoutNew.points = 0;

  userWithoutNew.addPoints = () => {
    userWithoutNew.points++;
    console.log(`total point`);
  };
  return userWithoutNew;
}

User.prototype.login = function () {
  console.log(`${this.name} has logged in.`);
};
User.prototype.logout = function () {
  console.log(`${this.name} has logged out.`);
};

// Examples
const user = new User("Mehedi Hasan", "mytaison@aol.com");
const userWithoutNew = UserWithoutNew(
  "Mehedi Hasan Megamind",
  "mytaison@live.com"
);
// console.log(user);
// console.log(userWithoutNew);

// Property & Prototype Inheritance
function AdminUser(name, email, peopleReporting) {
  User.apply(this, [name, email]); // instantiating all the properties of User object
  this.peopleReporting = peopleReporting;
}
AdminUser.prototype = Object.create(User.prototype); // inheriting User prototype
AdminUser.prototype.updatePeopleReporting = function (nameOfPeople) {
  this.peopleReporting = nameOfPeople;
};
const adminUser = new AdminUser(
  "Mehedi Hasan Megamind",
  "mytaison@aol.com",
  "Nishat Tabassum"
);
console.log(adminUser);

// Property Descripter
// value
// writable - boolean
// enumerable - boolean
// configurable - boolean
const book = {
  title: "Book title",
  pages: 300,
  author: "Book Author",
};
console.log(Object.getOwnPropertyDescriptors(book));

// Define Property using defineProperty method
Object.defineProperty(book, "titleManual", {
  value: "This is title of the book",
  writable: false,
  enumerable: true,
  configurable: true,
});
book.titleManual = "Title is changed"; // it will not be assigned as writable is false
console.log(Object.getOwnPropertyDescriptors(book));
