// Void Type
const addNumbers = (): void => {
  console.log(2 + 4);
};

addNumbers();

// Never Type
const throwError = (): never => {
  throw new Error("Just an manmade error.");
};
throwError();
