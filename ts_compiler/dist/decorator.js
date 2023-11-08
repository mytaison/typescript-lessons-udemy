"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorators are special kind of declaration that can be attached with class declaration and it's members.
// Decorators are fired only once in the lifecycle of the application and it is fired in the runtime
function FirstDecorator(constructor) {
    console.log("Decorator Invoked.");
    console.log(constructor);
}
let Aircraft = class Aircraft {
    constructor(_aircraftModel, pilot) {
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        console.log(this._aircraftModel);
        return this._aircraftModel;
    }
};
Aircraft = __decorate([
    FirstDecorator,
    __metadata("design:paramtypes", [String, String])
], Aircraft);
// Decorator factories encapsulates original decorator function and returns the original decorator function
// Decorator Factory can take any number of parameters
function DecoratorFactory(name) {
    // Decorator Function
    return (constructor) => {
        console.log(`${name} Decorator Invoked.`);
        console.log(constructor);
    };
}
let ABC = class ABC {
    constructor() { }
};
ABC = __decorate([
    DecoratorFactory("SecondDecorator"),
    __metadata("design:paramtypes", [])
], ABC);
var Manufacturers;
(function (Manufacturers) {
    Manufacturers["boeing"] = "Boeing";
    Manufacturers["airbus"] = "Airbus";
})(Manufacturers || (Manufacturers = {}));
function AircraftManufacturer(manufacturer) {
    return (target) => {
        if (manufacturer === Manufacturers.airbus) {
            target.prototype.origin = "USA";
            target.prototype.manufacturer = Manufacturers.airbus;
            target.prototype.type = "BUS";
            target.prototype.airbusMethod = () => {
                console.log("Funciton performed by Airbus Method");
            };
        }
        else {
            target.prototype.origin = "France";
            target.prototype.manufacturer = Manufacturers.boeing;
            target.prototype.type = "JET";
            target.prototype.boeingMethod = () => {
                console.log("Funciton performed by Boeing Method");
            };
        }
    };
}
let AircraftX = class AircraftX {
    constructor(_aircraftModel, manufacturer, pilot) {
        this._aircraftModel = _aircraftModel;
        this.manufacturer = manufacturer;
        this.pilot = pilot;
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        console.log(this._aircraftModel);
        return this._aircraftModel;
    }
};
AircraftX = __decorate([
    AircraftManufacturer(Manufacturers.airbus),
    __metadata("design:paramtypes", [String, String, String])
], AircraftX);
const aircraftX = new AircraftX("Airbus A330", "Airbus", "Mehedi Hasan");
console.log(aircraftX);
console.log(aircraftX.manufacturer);
aircraftX.airbusMethod
    ? aircraftX.airbusMethod()
    : console.log("Airbus Method Not available.");
// We can use same decorator in multiple classes
let AircraftY = class AircraftY {
    constructor(_aircraftModel, manufacturer, pilot) {
        this._aircraftModel = _aircraftModel;
        this.manufacturer = manufacturer;
        this.pilot = pilot;
        this._aircraftModel = _aircraftModel;
        this.pilot = pilot;
    }
    pilotName() {
        console.log(this.pilot);
    }
    get aircraftModel() {
        console.log(this._aircraftModel);
        return this._aircraftModel;
    }
};
AircraftY = __decorate([
    AircraftManufacturer(Manufacturers.boeing),
    __metadata("design:paramtypes", [String, String, String])
], AircraftY);
const aircraftY = new AircraftY("Boeing 787", "Boeing", "Nishat Tabassum");
console.log(aircraftY);
// Decorators in Methods of the class
// Main difference is when decorator is applied to member of the class which is here Method, it takes 3 arguments
// but in class, it takes only one argument 'constructor'
function MethodDecorator(classPrototype, methodName, descriptor) {
    console.log("Method Decorator invoked");
    console.log(classPrototype);
    console.log(methodName);
    console.log(descriptor);
}
// Decorators in Static Methods of the class
function StaticMethodDecorator(constructor, methodName, descriptor) {
    console.log("Static Method Decorator invoked");
    console.log(constructor);
    console.log(methodName);
    console.log(descriptor);
}
// Decorators in Methods' Parameters of the class
function ParameterOfMethodDecorator(classPrototype, methodName, index) {
    console.log("Method Parameter Decorator invoked");
    console.log(classPrototype);
    console.log(methodName);
    console.log(index);
}
// Decorators for Class Properties
function PropertyDecorator(classPrototype, propertyName) {
    console.log("Class Property Decorator invoked");
    console.log(classPrototype);
    console.log(propertyName);
}
// Decorator for Accessor Method
function AccessorDecorator(classPrototype, accessorName, propertyDescriptor) {
    console.log("Accessor Decorator invoked");
    console.log(classPrototype);
    console.log(accessorName);
    console.log(propertyDescriptor);
}
class AircraftZ {
    constructor(airlineModel) {
        this._airlineModel = airlineModel;
    }
    getClassName() {
        console.log(this.constructor.name);
    }
    static sitCount() {
        console.log("Total Seats: 150");
    }
    setNoOfCrews(number) {
        console.log(`Number of Crews: ${number}`);
    }
    get aircraftModel() {
        return this._airlineModel;
    }
}
__decorate([
    PropertyDecorator,
    __metadata("design:type", String)
], AircraftZ.prototype, "_airlineModel", void 0);
__decorate([
    MethodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AircraftZ.prototype, "getClassName", null);
__decorate([
    __param(0, ParameterOfMethodDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AircraftZ.prototype, "setNoOfCrews", null);
__decorate([
    AccessorDecorator,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AircraftZ.prototype, "aircraftModel", null);
__decorate([
    StaticMethodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AircraftZ, "sitCount", null);
const aircraftZ = new AircraftZ("Boeing 787");
