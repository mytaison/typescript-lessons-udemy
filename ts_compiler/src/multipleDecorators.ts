function DecoratorOne(target: Function) {
  console.log("Decorator One");
}
function DecoratorTwo(target: Function) {
  console.log("Decorator Two");
}

interface MapLocation {
  lat: number;
  long: number;
}

// function AddLocationDecorator(classConstructor: FunctionConstructor) {
//   return class extends classConstructor {
//     constructor() {
//       super();
//     }
//   };
// }
function AddLocationFactory(lat: number, long: number) {
  return <T extends { new (...args: any[]): {} }>(classConstructor: T) => {
    return class extends classConstructor {
      public mapLocation: MapLocation;
      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = { lat, long };
      }
    };
  };
}
@DecoratorOne
@DecoratorTwo
@AddLocationFactory(1.234, 123.2)
class Person {
  constructor(public name: string, public age: number) {}
}
const person = new Person("Mehedi Hasan", 30);
console.log(person);
