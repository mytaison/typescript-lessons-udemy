// checkingCompatibility

// type casting
const numbers = {
  x: 10,
  y: {
    z: 13,
  },
} as const;

// alternate way
const numbersAlternate = <const>{
  x: 10,
  y: {
    z: 13,
  },
};

// will throw error as numbers is now constant
// numbers.x = 10

// Totality
type Weekdays = "Mon" | "Tues" | "Wed" | "Thurs" | "Fri";
type Days = Weekdays | "Sat" | "Sun";
function nextDayOfAWeekDay(givenDay: Weekdays): Days {
  switch (givenDay) {
    case "Mon":
      return "Tues";
    case "Tues":
      return "Wed";
    case "Wed":
      return "Thurs";
    case "Thurs":
      return "Fri";
    // If any of the weekdays is missing from case match , typescript will throw an error
    case "Fri":
      return "Sat";
  }
}

// Discriminated Unions
type Cat = {
  type: "cat";
  purrs: boolean;
};
type Dog = {
  type: "dog";
  barks: boolean;
};
type Animal = Cat | Dog;

let cat: Animal = {
  type: "cat",
  purrs: true, // if type is cat only then purrs can be property
};
let dog: Animal = {
  type: "dog",
  barks: true, // if type is dog only then barks can be property
};
function animalReaction(animal: Animal) {
  switch (animal.type) {
    case "cat":
      console.log("The animal is cat and it purrs");
      break;
    case "dog":
      console.log("The animal is dog and it barks");
      break;
  }
}

// Keying in or index Accessed Type
type UserDetailsAPIResponse = {
  id: number;
  name: string;
  servicesList: {
    count: number;
    services: {
      id: number;
      name: string;
      price: number;
    }[];
  };
};
function fetchUserDetails(name: string): Promise<UserDetailsAPIResponse> {
  return new Promise((res, rej) => {
    if (name) {
      res({
        id: 23,
        name: "John",
        servicesList: {
          count: 2,
          services: [
            {
              id: 1,
              name: "Accounting",
              price: 123,
            },
            {
              id: 2,
              name: "Design",
              price: 100,
            },
          ],
        },
      });
    } else {
      rej(new Error("Pass a valid name."));
    }
  });
}

// Accessing index from type
type ServiceList = UserDetailsAPIResponse["servicesList"];
function printServiceList(services: ServiceList): void {
  console.log(services);
}

const result = fetchUserDetails("John")
  .then((data) => {
    console.log(data);
    printServiceList(data.servicesList);
  })
  .catch((err) => console.error(err));

// keyOf operator
type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

type unionOfKeysOfTypeEvents = keyof Events; // type of Numeric will be -> "id" | "date" | "type"
type Numeric = {
  [key: number]: string;
};
type NumericKeyOf = keyof Numeric; // type of NumericKeyOf will be -> number only
type NumberAndString = {
  [key: string]: string; // type of NumberAndString will be -> number | string
};

// typeOf operator
let greeting = "Hello World!";
let post_greeting: typeof greeting;
const user = {
  name: "John",
  age: 32,
};
const tom: typeof user = {
  name: "Tom",
  age: 32,
};

// mapped types
let numbersX = [1, 2, 3, 4, 5];
let stringNumbers = numbersX.map((x) => x.toString());

type WeekDays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = WeekDays | "Sat" | "Sun";
type NextDay = {
  [W in WeekDays]: Day; // here WeekDays type is mapped as index in new type NextDay
};

type Artist = {
  id: number;
  name: string;
  bio: string;
};
// type AristForEditing = {
//     id: number,
//     name?: string,
//     bio?: string
// }
type MappedArtistForEdit = {
  [Property in keyof Artist]?: Artist[Property];
} & { id: number };

const artist: Artist = {
  id: 1,
  name: "Michael Jackson",
  bio: "Hi! I am MJ",
};
const editedArtist: MappedArtistForEdit = {
  id: 1,
  bio: "MJ: This is it!",
};

// Conditional Type
interface AnimalInterface {
  live: () => void;
}
interface DogInterface extends AnimalInterface {
  woof: () => void;
}
// SomeType extends OtherType ? TrueType : FalseType
type Poodles = Dog extends Animal ? string : number;

type isString<T> = T extends string ? true : false;
type A = isString<string>;
type B = isString<number>;
// Exercises
type ans1 = number extends 56 ? true : false; // false
type ans2 = 76 extends number ? true : false; // true
type ans3 = string[] extends any ? true : false; // true
type ans4 = string[] extends any[] ? true : false; // true
type ans5 = unknown extends any ? true : false; // true
type ans6 = any extends any ? true : false; // true
type ans7 = Date extends { new (...args: any[]): any } ? true : false; // false
type ans8 = typeof Date extends { new (...args: any[]): any } ? true : false; // true

// Constrain On Conditional Types
interface User {
  id: number;
  name: string;
  email: string;
}
interface ReadPermission {
  write: false;
}
interface WritePermission {
  write: true;
}
interface Admin extends User, WritePermission {}
interface Author extends User, WritePermission {}
interface Reader extends User, ReadPermission {}
type FilterWritable<Interface> = Interface extends { write: true }
  ? true
  : false;
type Writable = FilterWritable<Admin>;
type Writable2 = FilterWritable<Reader>;

// Inferrring with Conditional Types
type ArrayElementType<T> = T extends (infer E)[] ? E : T;
type typeOne = ArrayElementType<string[]>;
type typeTwo = ArrayElementType<number[]>;
type typeThree = ArrayElementType<(number | string | boolean)[]>;
type typeFour = ArrayElementType<{ name: string }>;

// Inferring return type of a function
function returnString() {
  return "string";
}
type FuncReturnType<T> = T extends () => infer R ? R : T;
type newType = FuncReturnType<typeof returnString>;

// Inferring Function Arguments
function personFunc(name: string, age: number) {
  return {
    name: name,
    age: age,
  };
}
type FirstArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArg,
  ...args: any[]
) => any
  ? FirstArg
  : never;
type FirstArgument = FirstArgumentOfAnyFunction<typeof personFunc>;
type SecondArgumentOfAnyFunction<T> = T extends (
  first: any,
  second: infer SecondArg,
  ...args: any[]
) => any
  ? SecondArg
  : never;
type SecondArgument = SecondArgumentOfAnyFunction<typeof personFunc>;

// Satisfies Operator
const color = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [255, 255, 0],
};
// properties can have wrong spell, but typescript will not show error, to deal with it,
type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const colorX = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [255, 255, 0],
} satisfies Record<Properties, RGB | string>;
const redComponent = colorX.red[0];
const greenValue = colorX.green.toUpperCase();
