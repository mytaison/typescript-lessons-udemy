// Decorators are special kind of declaration that can be attached with class declaration and it's members.
// Decorators are fired only once in the lifecycle of the application and it is fired in the runtime
function FirstDecorator(constructor: Function) {
  console.log("Decorator Invoked.");
  console.log(constructor);
}
@FirstDecorator
class Aircraft {
  constructor(public _aircraftModel: string, private pilot: string) {
    this._aircraftModel = _aircraftModel;
    this.pilot = pilot;
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    console.log(this._aircraftModel);
    return this._aircraftModel;
  }
}

// Decorator factories encapsulates original decorator function and returns the original decorator function
// Decorator Factory can take any number of parameters
function DecoratorFactory(name: string) {
  // Decorator Function
  return (constructor: Function) => {
    console.log(`${name} Decorator Invoked.`);
    console.log(constructor);
  };
}
@DecoratorFactory("SecondDecorator")
class ABC {
  constructor() {}
}

enum Manufacturers {
  boeing = "Boeing",
  airbus = "Airbus",
}

// interface introduced here to get of ts error, manufacturer is property of prototype. But
// js goes native to chain parent prototype object to search for the property
interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "BUS";
      target.prototype.airbusMethod = () => {
        console.log("Funciton performed by Airbus Method");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "JET";
      target.prototype.boeingMethod = () => {
        console.log("Funciton performed by Boeing Method");
      };
    }
  };
}
@AircraftManufacturer(Manufacturers.airbus)
class AircraftX implements AircraftInterface {
  constructor(
    public _aircraftModel: string,
    public manufacturer: string,
    private pilot: string
  ) {
    this._aircraftModel = _aircraftModel;
    this.pilot = pilot;
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    console.log(this._aircraftModel);
    return this._aircraftModel;
  }
}

const aircraftX: AircraftInterface = new AircraftX(
  "Airbus A330",
  "Airbus",
  "Mehedi Hasan"
);
console.log(aircraftX);
console.log(aircraftX.manufacturer);
aircraftX.airbusMethod
  ? aircraftX.airbusMethod()
  : console.log("Airbus Method Not available.");

// We can use same decorator in multiple classes
@AircraftManufacturer(Manufacturers.boeing)
class AircraftY implements AircraftInterface {
  constructor(
    public _aircraftModel: string,
    public manufacturer: string,
    private pilot: string
  ) {
    this._aircraftModel = _aircraftModel;
    this.pilot = pilot;
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    console.log(this._aircraftModel);
    return this._aircraftModel;
  }
}
const aircraftY: AircraftInterface = new AircraftY(
  "Boeing 787",
  "Boeing",
  "Nishat Tabassum"
);
console.log(aircraftY);

// Decorators in Methods of the class
// Main difference is when decorator is applied to member of the class which is here Method, it takes 3 arguments
// but in class, it takes only one argument 'constructor'

function MethodDecorator(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator invoked");
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
}

// Decorators in Static Methods of the class
function StaticMethodDecorator(
  constructor: object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Static Method Decorator invoked");
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
}

// Decorators in Methods' Parameters of the class
function ParameterOfMethodDecorator(
  classPrototype: object,
  methodName: string,
  index: number
) {
  console.log("Method Parameter Decorator invoked");
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

// Decorators for Class Properties
function PropertyDecorator(classPrototype: object, propertyName: string) {
  console.log("Class Property Decorator invoked");
  console.log(classPrototype);
  console.log(propertyName);
}

// Decorator for Accessor Method
function AccessorDecorator(
  classPrototype: object,
  accessorName: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator invoked");
  console.log(classPrototype);
  console.log(accessorName);
  console.log(propertyDescriptor);
}

class AircraftZ {
  @PropertyDecorator
  public _airlineModel: string;

  constructor(airlineModel: string) {
    this._airlineModel = airlineModel;
  }

  @MethodDecorator
  public getClassName() {
    console.log(this.constructor.name);
  }

  @StaticMethodDecorator
  public static sitCount(): void {
    console.log("Total Seats: 150");
  }

  public setNoOfCrews(@ParameterOfMethodDecorator number: number): void {
    console.log(`Number of Crews: ${number}`);
  }
  @AccessorDecorator
  public get aircraftModel() {
    return this._airlineModel;
  }
}

const aircraftZ = new AircraftZ("Boeing 787");
