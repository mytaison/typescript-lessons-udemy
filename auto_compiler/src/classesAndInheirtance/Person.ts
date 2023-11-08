class PersonSample {
  name: string;
  email: string;

  constructor(
    name: string = "Firstname Lastname",
    email: string = "sample@email.com",
  ) {
    this.name = name;
    this.email = email;
  }
  greet() {
    return `Hello ${this.name}!`;
  }
}
const Person1 = new PersonSample();
const Person2 = new PersonSample("Adnan Kamal", "kamala009@gmail.com");
console.log(Person1.greet());
console.log(Person2.greet());
