class Example {
  propertyOne: number; // if access modifiers not mentioned then it is public
  public propertyTwo: string;
  private propertyThree: string;
  protected propertyFour: boolean;

  constructor(
    propertyOne: number,
    propertyTwo: string,
    propertyThree: string,
    propertyFour: boolean,
  ) {
    this.propertyOne = propertyOne;
    this.propertyTwo = propertyTwo;
    this.propertyThree = propertyThree;
    this.propertyFour = propertyFour;
  }

  public getPropertyValue(propertyName: keyof this): any {
    if (!this.hasOwnProperty(propertyName)) return null;
    return this[propertyName];
  }
  public getPropertyThree() {
    return this.propertyThree;
  }
  public getPropertyFour() {
    return this.propertyFour;
  }
}
const ExampleOne = new Example(1, "A", "B", true);
console.log(ExampleOne.getPropertyValue("propertyOne"));
console.log(ExampleOne.propertyOne);
console.log(ExampleOne.propertyTwo);
console.log(ExampleOne.getPropertyThree());
console.log(ExampleOne.getPropertyFour());
