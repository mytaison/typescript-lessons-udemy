type AirplaneType = {
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

const airplaneExample: AirplaneType = {
  flightNumber: "MH141",
  airplaneModel: "A330",
  dateOfDeparture: "29/09/2023",
  timeOfDeparture: "23:00",
  from: "DAC",
  to: "SYD",
  seats: {
    "10A": "Mehedi Hasan",
    "10B": "Nishat Tabassum",
  },
};
