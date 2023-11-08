// Default parameters and optional parameters
function optionalParameter(name: string, age: number, country?: string) {
  console.log(name);
  console.log(age);
  if (country) console.log(country);
}
optionalParameter("Mehedi", 30);

// Default parameters value
function optionalParameterx(
  name: string = "Human",
  age: number = 0,
  country?: string,
) {
  console.log(name);
  console.log(age);
  if (country) console.log(country);
}
optionalParameterx("Mehedi", 30);
optionalParameterx("Hasan");
optionalParameterx();
