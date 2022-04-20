/*
 
Using ECMA6 notation, create a Computer class, containing parameters, such as:

* name,
* CPU speed,
* RAM size,
* hard disk type,
* hard disk size,
* screen size.

Now create a Comparer class, with a method allowing to compare two computers and print the result in console. For example:
*/

class Computer {
  constructor(name, cpu, ram, hd, size, screen) {
    this.name = name;
    this.cpu = cpu;
    this.ram = ram;
    this.hd = hd;
    this.size = size;
    this.screen = screen;
  }
}

// mano versija
// class Comparer {
//   compare = function (c1, c2) {
//     if (compare1.name !== compare2.name) {
//       console.log(compare1.name, compare2.name);
//     }
//     if (compare1.CPUspeed > compare2.CPUspeed) {
//       console.log(`${compare1.name}: ${compare1.CPUspeed}`);
//     } else console.log(`${compare2.name}: ${compare1.CPUspeed}`);

//     if (compare1.RAMsize > compare2.RAMsize) {
//       console.log(`${compare1.name}: ${compare1.RAMsize}`);
//     } else console.log(`${compare2.name}: ${compare2.RAMsize}`);

//     if (compare1.HDtype === compare2.HDtype) {
//       console.log(`lygu`);
//     } else if (compare1.HDtype === "SSD") console.log(`${compare1.name}: ${compare1.HDtype}`);
//     else {
//       console.log(`${compare2.name}: ${compare2.HDtype}`);
//     }
//   };
// }

// destytojo kodas
// class Comparer {
//   compare(c1, c2) {
//     compareNumbers(c1.cpu, c2.cpu, "cpu");
//     compareNumbers(c1.ram, c2.ram, "ram");
//     compareNumbers(c1.size, c2.size, "size");
//     compareNumbers(c1.screen, c2.screen, "screen");
//   }
// }

// function compareNumbers(nr1, nr2, propertyName) {
//   if (nr1 === nr2) {
//     console.log(`${propertyName} is equal`);
//   } else if (nr1 > nr2) {
//     console.log(`${propertyName} better on first computer`);
//   } else {
//     console.log(`${propertyName} better on second computer`);
//   }
// }

// //sample calls

// //create Computer objects to compare
// var computer1 = new Computer("test1", 2, 3, "HDD", 4, 5);
// var computer2 = new Computer("test2", 5, 4, "SSD", 3, 2);

// //create a Comparer object and use its method
// var comparer = new Comparer();
// var result = comparer.compare(computer1, computer2);

// console.log(computer1);
// console.log(computer2);

/////////////////////
// kita uzduotis

/*
Create a Car class (brand, model, current fuel amount).
Create some other classes, extending the Car class, having different maximum fuel amounts, for example:

* passenger car: 50 litres
* bus: 200 litres
* truck: 500 litres

Create a GasStation class, which will have a method able to count the amount of fuel needed to fill the tank of a car (given its current and maximum amount of fuel).
*/

/*
//parent class constructor
class Car {
  constructor(brand, model, fuel) {
    this.brand = brand;
    this.model = model;
    this.fuel = fuel;
  }
}

//children constructors
class PassengerCar extends Car {
  constructor(brand, model, fuel) {
    super(brand, model, fuel);
    const maxFuel = 50;
    this.getMaxFuel = () => {
      return maxFuel;
    };
  }
}

//TODO rest of classes

var passCar = new PassengerCar("Audi", 80, 30);

class GasStation {
  fullTank(currentFuel, maxFuel) {
    return maxFuel - currentFuel;
  }
}

var gasStation = new GasStation();
var missingGas = gasStation.fullTank(passCar.fuel, passCar.maxFuel);

*/

// https://js.en.sdacademy.pro/exercises/object_oriented_programming_in_javascript/exercises/#encapsulation

// * Create a Person class by using ECMA6.
// * It should have a name, a surname, some age properties.
// * Now create an Address class.
// It should contain a street, a number, a postal code, a city.
// Now our Address should become a property of the Person class.
// Create methods for the Person class: setAddress() and getAddress() - they set and return the address of a person.
// Try to make the address inaccessible from outside the Person class (except for using the methods mentioned above).

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    let addr;
    this.setAddress = function (address) {
      addr = address;
    };

    this.getAddress = function () {
      return addr;
    };
  }
}

class Address {
  constructor(street, number, postalCode, city) {
    this.street = street;
    this.number = number;
    this.postalCode = postalCode;
    this.city = city;
  }
}

var person = new Person("a", "b", 1);
var address = new Address("aa", 2);

person.setAddress(address);

console.log(person);
console.log(person.getAddress());
