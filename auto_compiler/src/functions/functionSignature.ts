// Function Call Signature
enum ageUnit1 {
  years = "years",
  months = "months",
}
type state = "alive" | "dead";
type SampleHuman1 = {
  name: string;
  age: number;
  ageUnit: ageUnit1;
  country: string;
  state: state;
  stateTransition: Function; // This will only check if it is function but will not check function params or return types
  bodyFunction: (functionName: string) => string; // This is function signature, which will check params and return types
};

const Human2: SampleHuman1 = {
  name: "Mega",
  age: 10,
  ageUnit: ageUnit1.years,
  country: "BD",
  state: "alive",
  stateTransition: () => {
    if (Human2.state === "alive") Human2.state = "dead";
    else Human2.state = "alive";
    return Human2;
  },
  bodyFunction: (functionName) => {
    return `${functionName} is healthy`;
  },
};
console.log(Human2);
Human2.stateTransition();
console.log(Human2.bodyFunction("Liver"));
console.log(Human2);
