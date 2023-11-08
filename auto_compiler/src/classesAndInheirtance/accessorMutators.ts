class Person {
  //   constructor(
  //     private name: string,
  //     private age: number,
  //   ) {
  //     // flawed code due to excess coding and need to recheck when updating age value
  //     if (age > 200 || age < 0) {
  //       throw new Error("Age is invalid");
  //     }
  //   }
  constructor(
    private _name: string,
    private _age: number,
  ) {
    this.testUserAge(_age);
    // this._age = _age;
  }

  private testUserAge(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("Age is should be in the range of 0-200");
    }
    return age;
  }

  public get name() {
    return this._name;
  }

  public get age() {
    return this._age;
  }

  public set name(name: string) {
    if (!name) {
      throw new Error("Name is invalid");
    }
    this._name = name;
  }

  public set age(age: number) {
    this._age = this.testUserAge(age);
  }
}
const John: Person = new Person("John", 10);
const Mark: Person = new Person("Mark", 20);
const Taylor: Person = new Person("Taylor", 200);
console.log(John);
console.log(Mark);
console.log(Taylor);
Taylor.age = 120;
Taylor.name = "Taylor Swift";
// Mark.age = 201; // Will throw error
console.log(Mark.age);
