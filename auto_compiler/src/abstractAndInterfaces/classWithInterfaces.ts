enum AutomobileTypesX {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrandsX {
  ferrari = "ferrari",
  bmw = "bmw",
  honda = "honda",
  toyota = "toyota",
}

enum AutomobileColorsX {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface AutomobileInterface<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  color: Colors[];
  description: string;
}

interface CommercialAutomobile {
  automobileClass: string;
  licenseRenewalDate: Date;
}

class Car
  implements
    AutomobileInterface<string, AutomobileBrandsX, AutomobileColorsX>,
    CommercialAutomobile
{
  public type: string = "car";
  constructor(
    public brand: AutomobileBrandsX,
    public color: AutomobileColorsX[],
    public description: string,
    public automobileClass: string,
    public licenseRenewalDate: Date,
  ) {}
}

const FerrariFZR: Car = new Car(
  AutomobileBrandsX.ferrari,
  [AutomobileColorsX.black, AutomobileColorsX.red, AutomobileColorsX.white],
  "Ferrari FZR 2000",
  "classA",
  new Date(),
);

console.log(FerrariFZR);
