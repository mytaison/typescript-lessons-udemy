let arr1: number[] = [1, 2, 3];
let arr2: Array<string> = ["a", "b", "c"];
let arr3: Array<string | number> = [1, "a", 2, "b"];

type PlaneType = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    // index signatures
    [key: string]: string;
  };
};

type Planes = PlaneType[];

const planes: Planes = [
  {
    flightNumber: "MH141",
    airplaneModel: "A330-B",
    dateOfDeparture: "28/09/2023",
    timeOfDeparture: "20:12",
    from: "KUL",
    to: "DAC",
    seats: {
      VIP01: "Mehedi Hasan",
      VIP02: "Ayesha Afseen",
    },
  },
  {
    flightNumber: "MH123",
    airplaneModel: "B-788",
    dateOfDeparture: "28/09/2023",
    timeOfDeparture: "18:35",
    from: "DAC",
    to: "LON",
    seats: {
      VIP01: "Mehedi Hasan",
      VIP02: "Adnan Kamal",
    },
  },
];
