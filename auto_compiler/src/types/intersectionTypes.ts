type CatX = {
  name: string;
  furColor: string;
  purrs: boolean;
  domestic: boolean;
  bites: boolean;
};
type DogX = {
  name: string;
  furColor: string;
  barks: boolean;
  wags: boolean;
  bites: boolean;
};
type CatIntersectDog = CatX & DogX;

// Union type object can have only both's all common & unique properties
let Hybrid: CatIntersectDog = {
  name: "Toby",
  furColor: "white",
  purrs: true,
  domestic: true,
  bites: false,
  barks: false,
  wags: false,
};
