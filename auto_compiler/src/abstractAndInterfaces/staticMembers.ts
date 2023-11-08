class Automobile {
  public static color: string = "red";
  public static calculateMilage(miles: number, liters: number) {
    return miles / liters;
  }
}

console.log(Automobile.color);
console.log(Automobile.calculateMilage(10, 2));
