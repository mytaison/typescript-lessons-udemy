// Using the "type" keyword , you can create Type Aliases
type Wheel = {
  diameter: number;
  thread: string;
  company: string;
};
type Bodykit = {
  color: string;
  shape: string;
};
type SUV = {
  wheel: Wheel;
  door: string;
  body: Bodykit;
};

let suv: SUV = {
  wheel: {
    diameter: 18,
    thread: "wet",
    company: "dunlop",
  },
  door: "spider",
  body: {
    color: "white",
    shape: "box",
  },
};

console.log(suv);

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};

let caterer: Caterer = {
  name: "Special Food Ltd.",
  address: "72-78 Jersey Avenue, Mortdale",
  phone: 61472739238,
};
let airplane: Airplane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: caterer,
};

console.log(airplane);
