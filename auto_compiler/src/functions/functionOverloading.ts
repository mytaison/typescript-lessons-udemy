type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// Function Signature - Overloading
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
  (
    departureDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
};

// Function Declaration
const Reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string,
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string" && !destination) {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Conditions didn't match");
};

console.log(Reserve(new Date(), new Date(), "SYD", "DAC"));
console.log(Reserve(new Date(), "SYD", "DAC"));
// console.log(Reserve(new Date(), 1234, "DAC"));
