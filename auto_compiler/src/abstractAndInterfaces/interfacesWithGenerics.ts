enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  bmw = "bmw",
  honda = "honda",
  toyota = "toyota",
}

enum AutomobileColors {
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

const FerrariF30: AutomobileInterface<
  AutomobileTypes,
  AutomobileBrands,
  AutomobileColors
> = {
  type: AutomobileTypes.car,
  brand: AutomobileBrands.ferrari,
  color: [AutomobileColors.black, AutomobileColors.red],
  description: "Ferrari F30 Limited Edition",
};

const HondaCRV: AutomobileInterface<string, string, string> = {
  type: "car",
  brand: "honda",
  color: ["white", "blue", "silver"],
  description: "Honda CR-V 2020 Edition",
};

const ToyotaCorolla: AutomobileInterface<string, AutomobileBrands, number> = {
  type: "car",
  brand: AutomobileBrands.toyota,
  color: [111111, 233444],
  description: "Toyota Corolla 2023 Edition",
};

console.log(ToyotaCorolla);
console.log(HondaCRV);
console.log(FerrariF30);
