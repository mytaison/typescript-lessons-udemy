// Custom Param and Return Types
enum ageUnit {
  years = "years",
  months = "months",
}

type SampleHuman = {
  name: string;
  age: number;
  ageUnit: ageUnit;
  country: string;
};

const Human1: SampleHuman = {
  name: "Mega",
  age: 10,
  ageUnit: ageUnit.years,
  country: "BD",
};

function ageConvertYearsToMonths(human: SampleHuman): SampleHuman {
  human.age = human.age * 12;
  human.ageUnit = ageUnit.months;
  return human;
}
console.log(ageConvertYearsToMonths(Human1));
