// PIRMA UŽDUOTIS

//function sum
//function mult
//function minus

//function b

// var a = b(7, 10, sum); //17
// var c = b(7, 10, mult); //70
// var d = b(7, 10, minus); //3

// function sum(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// ANTRA UŽDUOTIS

// var a = b(7, 10, function (a, b) {
//   return a + b;
// });
// //17

// var c = b(7, 10, function (a, b) {
//   return a * b;
// });
// //70

// var d = b(7, 10, function (a, b) {
//   if (b > a) {
//     return b - a;
//   }
//   return a - b;
// });
// //3

// function b(a, b, callback) {
//   return callback(a, b);
// }

// console.log(a);
// console.log(c);
// console.log(d);

// TREČIA UŽDUOTIS

// var countFactory = function () {
//   var counter = 0;
//   return function () {
//     return (counter += 1);
//   };
// };

// var count = countFactory();
// var anotherCount = countFactory();

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// KETVIRTA UŽDUOTIS

// var countFactory = function (x) {
//   var counter = 0;
//   return function () {
//     return (counter += x);
//   };
// };

// var count = countFactory(10);
// var anotherCount = countFactory();

// var count1 = count();
// console.log(count1);

// var count2 = anotherCount();
// console.log(count2);

// var count3 = count();
// console.log(count3);

// PENKTA UŽDUOTIS

// var accountFactory = function () {
//   var balance = 0;
//   return function (x) {
//     return (balance += x);
//   };
// };

// var addToAccount = accountFactory();
// console.log(accountFactory);
// console.log(addToAccount);

// var count1 = addToAccount(10);
// console.log(count1);

// var count3 = addToAccount(5);
// console.log(count3); // 15

// 2021-12-13

// var person = {
//   firstName: "Petras",
//   lastName: "Petraitis",
//   age: 25,
// };
// var x = 30;

// function change(person, newAge) {
//   person.age = newAge;
//   newAge = 0;
// }

// function change(person, newAge) {
//   newAge = 0;
//   person.age = newAge;
// }

// function change(person, newAge) {
//   person.age = newAge;
//   newAge = x;
//   // x = x - 1;
//   // x -= 1;
//   x--;
// }

// change(person, x);
// console.log(person);
// console.log(x);

// 2 užduotis

// var obj = { name: "pencil", price: 10 };
// var x = 15;

// function change(product, newPrice) {
//   product.price = newPrice;
// }

// function cloneWithNewPrice(product, newPrice) {
//   var newObj = {};
//   newObj.name = product.name;
//   newObj.price = newPrice;
//   return newObj;

//   // return {
//   //   name: product.name,
//   //   price: newPrice,
//   // };
// }

// var clonedObject = cloneWithNewPrice(obj, x);

// console.log(obj);
// console.log(clonedObject);

// 3 užduotis

// var obj = { name: "pencil", price: 10 };
// var x = 15;
// var arr = [1, 2, 3, 4];
// arr.push(5);
// // for (var i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// function cloneArrayWithNewValue(arrayToClone, newValue) {
//   var newArr = [];
//   for (var i = 0; i < arrayToClone.length; i++) {
//     var currentElement = arrayToClone[i];
//     newArr.push(currentElement);
//   }
//   newArr.push(newValue);
//   return newArr;
// }

// var newArray = cloneArrayWithNewValue(arr, 7);
// console.log(arr);
// console.log(newArray);

// 4 užduotis

// var arr = [1, 2, 3, 4];

// function cloneArrayWithNewValue(arrayToClone, newValue) {
//   var newArray = [];
//   for (var i = 0; i < arrayToClone.length; i++) {
//     var currentElement = arrayToClone[i];
//     newArray.push(currentElement);
//   }
//   newArray.push(newValue);
//   return newArray;
// }

// function cloneArrayWithModifiedValues(arrayToClone, callback) {
//   var newArray2 = [];
//   for (var i = 0; i < arrayToClone.length; i++) {
//     var currentElement2 = arrayToClone[i];
//     newArray2.push(callback(currentElement2));
//   }
//   return newArray2;
// }

// var add4 = function (a) {
//   return a + 4;
// };

// var newArray = cloneArrayWithModifiedValues(arr, add4);
// console.log(arr); // [1,2,3,4]
// console.log(newArray); // [5,6,7,8]

// var arr2 = cloneArrayWithModifiedValues([10, 20], add4);
// console.log(arr2); //[14,24]

// ----------
// 2021-12-18
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   // If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//   if (prop !== "tracks" && value !== "") records[id][prop] = value;
//   else if (
//     // If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//     prop === "tracks" &&
//     !records[id][prop].hasOwnProperty(prop) // ČIA TOLIAU...
//   )
//     records[id][prop] = [];

//   {
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// ---------- paskaita

// const a = { a: 2, b: 3, c: { d: 5, g: 6 } };

// function printProperty(obj) {
//   for (const prop in obj) {
//     if (typeof obj[prop] === "object") {
//       printProperty(obj[prop]);
//     } else {
//       console.log(`${prop} = ${obj[prop]}`);
//     }
//   }
// }

// printProperty(a);

// console.log(printProperty(a));

// ----------

// var car = {
//   brand: "ford",
//   model: "fiesta",
//   year: 1999,
//   mileage: 200000,
//   launch: function () {
//     console.log("works!");
//   },
// };

// var car1 = {
//   brand: "opel",
//   model: "corsa",
//   year: 2003,
//   mileage: 100000,
//   launch: function () {
//     console.log("works!");
//   },
// };

// function newCar(brand, model, year, mileage) {
//   var car2 = {};
//   car2.brand = brand;
//   car2.model = model;
//   car2.year = year;
//   car2.mileage = mileage;
//   car2.launch = function () {
//     console.log("works!");
//   };
//   return car2;
// }

// console.log(newCar("vw", "golf", 2020, 500));

// ----------
// 2021-12-18-19
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   // If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//   if (prop !== "tracks" && value !== "") records[id][prop] = value;
//   else if (
//     // If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//     prop === "tracks"
//   ) {
//     console.log(`suveike 369 eilute ${records[id][prop]}`);
//     records[id][prop] = [];
//     records[id][prop].push(value) = records[id]; // ČIA TOLIAU...
//   }

//   return records;
// }

// // test
// console.log(recordCollection["2548"]["artist"]);
// console.log(recordCollection["2548"].hasOwnProperty("artist"));
// // end test

// updateRecords(recordCollection, 5439, "artist", "ABBA");
// console.log(updateRecords(recordCollection, 5439, "tracks", "naujasPav"));

// &&
// !records[id].hasOwnProperty(prop) // ČIA TOLIAU...

// if (condition) {

// } else {

// }

// ----------
// 2021-12-19

// var obj = {
//   age: 25,
//   langs: ["Js", "Java", "Python"],
// };
// var obj2 = {
//   age: 30,
//   databases: ["Mysql", "MongoDb"],
// };

// function showValues(object, propName) {
//   var values = object[propName];
//   if (values) {
//     for (var i = 0; i < values.length; i++) {
//       console.log(values[i]);

//       // currentElement = values[i];
//       // console.log(currentElement);
//     }
//   }
//   // return values;
// }

// console.log(showValues(obj, "langs")); //Js, Java, Python
// console.log(showValues(obj2, "databases")); //Mysql, MongoDb

// ----------
// destytojo

// var obj = {
//   age: 25,
//   langs: ["Js", "Java", "Python"],
// };
// var obj2 = {
//   age: 30,
//   databases: ["Mysql", "MongoDb"],
// };

// function showValues(object, propName) {
//   var values = object[propName];
//   if (values) {
//     var langs = "";
//     for (var i = 0; i < values.length; i++) {
//       langs = langs + values[i];
//       if (i !== values.length - 1) {
//         langs = langs + ", ";
//       }
//     }

//     console.log(langs);
//   }
// }

// showValues(obj, "langs"); //Js, Jave, Python
// showValues(obj, "databases");
// showValues(obj2, "databases"); // Mysql, MongoDb

// ----------
// https://js.en.sdacademy.pro/_slides/object_oriented_programming_in_javascript/introduction.html#/1

// function Movie(title, year, director) {
//   this.title = title;
//   this.year = year;
//   this.director = director;
//   this.info = function () {
//     console.log(this.title + " by " + this.director);
//   };
// }

// var movie1 = new Movie("Filmas 1", 2020, "Petras");
// var movie2 = new Movie("Filmas 2", 2021, "Jonas");

// console.log(movie1);
// console.log(movie2);

// console.log(movie1 instanceof Movie);
// console.log(movie1 instanceof Object);

// ----------

// function Person(name, year) {
//   this.name = name;
//   this.year = year;
//   this.hello = function () {
//     console.log("Hello " + this.name + ", now is " + this.year + " year 🙂");
//   };
// }

// var person1 = new Person("Jonas", 2021);

// person1.hello();

// ----------
// po pertraukos

// function Person(name, year) {
//   this.name = name;
//   this.year = year;
//   this.hello = function () {
//     console.log("Hello " + this.name + ", now is " + this.year + " year 🙂");
//   };
//   this.setName = function (newName) {
//     this.name = newName;
//   };
// }

// var person1 = new Person("Jonas", 2021);
// person1.setName("Petras");
// person1.hello();

// ----------

// var movie = function (newTitle, newDirector) {
//   let title = newTitle;
//   let director = newDirector;

//   this.info = function () {
//     console.log(title + " by " + director);
//   };
//   this.setNew = function (x, y) {
//     title = x;
//     director = y;
//   };
//   this.getTitle = function () {
//     return title;
//   };
// };

// var m = new movie("Titanic", "James Cameron");
// m.info();

// m.setNew("Hulk", "John");
// m.info();

// console.log(m.getTitle()); // "Hulk";

// 2022-01-08
// var a = 5;
// // console.log(a);

// var b = { a: a };
// // console.log(b);

// var c = b;
// // console.log(c);

// a = 6;

// c.a = 7;

// c = { a: 8 };

// c.a = 9;

// console.log(a, b, c);

// po pirmos pertraukos ~10:10

// mano pirma versija
// function Person(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
//   this.sayHello = function () {
//     console.log(`Hello ${name} ${lastName}`);
//   };
//   // return this.sayHello();
// }

// var p1 = new Person("Jonas", "Jonaitis");
// var p2 = new Person("Petras", "Petraitis");

// p1.sayHello();
// p2.sayHello();

// versija su destytoju
// function Person(name, lastName) {
//   var newPerson = {};
//   newPerson.name = name;
//   newPerson.lastName = lastName;
//   newPerson.sayHello = function () {
//     console.log(`Hello, my name is ${name} ${lastName}`);
//   };
//   return newPerson;
// }

// var p1 = Person("Jonas", "Jonaitis");
// var p2 = Person("Petras", "Petraitis");

// p1.sayHello();
// p2.sayHello();

//  su new zodziu
// function Person(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
//   this.sayHello = function () {
//     console.log(`Hello, my name is ${name} ${lastName}`);
//   };
// }

// var p1 = new Person("Jonas", "Jonaitis");
// var p2 = new Person("Petras", "Petraitis");

// p1.sayHello();
// p2.sayHello();

// po pertraukos ~11:20
// class Person {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//     this.sayHello = function () {
//       console.log(`Hello, my name is ${name} ${lastName}`);
//     };
//   }
// }

// var p1 = new Person("Jonas", "Jonaitis");
// var p2 = new Person("Petras", "Petraitis");

// p1.sayHello();
// p2.sayHello();

// uzduotis
// var movie = function (newTitle, newDirector) {
//   let title = newTitle;
//   let director = newDirector;
//   this.info = function () {
//     console.log(title + " by " + director);
//   };

//   this.setTitle = function (new2title) {
//     title = new2title;
//   };
// };

// var m = new movie("Titanic", "James Cameron");
// m.info(); //Titanic by James Cameron
// console.log(m); //undefined

// m.setTitle("Hulk");
// m.info();

// uzduotis perdaryt i class
// class Movie {
//   constructor(initialTitle, initialDirector) {
//     let title = initialTitle;
//     let director = initialDirector;
//     this.info = function () {
//       console.log("Title: " + title);
//     };

//     this.setTitle = function (newTitle) {
//       title = newTitle;
//     };
//   }
// }

// var m = new Movie("Titanic", "James Cameron");
// m.info();
// console.log(m);

// m.setTitle("Hulk");
// m.info();

// po ilgos pertraukos 12:30
// var arr = [
//   { name: "A", age: 15 },
//   { name: "B", age: 16 },
//   { name: "C", age: 17 },
//   { name: "D", age: 18 },
//   { name: "E", age: 19 },
// ];

// // arr.forEach(function (element) {});

// arr.forEach((element) => {
//   console.log(element.name);
// });

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i].name);
// // }

// arr.forEach((element, index, patsArray) => {
//   console.log(element.name);
// });

// kita uzduotis
//we have an array
// var arr = [10, 11, 12, 30, 1, 100];

//we write our custom function for searching
//we want to find an element having value over 20:

// function searcher(value, index, array) {
//   return value > 20;
// }

//we use array find
// var item = arr.find(searcher);

// kaip arrow
// var searcher = (value, index, array) => {
//   return value > 20;
// };

// var item = arr.find((value) => value > 20);

// console.log(item);

// uzduotis
// class Movie {
//   constructor(initialTitle, initialDirector) {
//     this.title = initialTitle;
//     this.director = initialDirector;
//     this.info = function () {
//       console.log(`${this.title} by ${this.director}`);
//     };
//   }
// }

// var m = new Movie("Titanic", "James Cameron");
// m.info();

// uzduotis
// var arr = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true,
//   },
// ];

// // isprintint jei complete yra true

// arr.forEach((title, completed) => {
//   if (completed) {
//     console.log(title);
//   }
// });

// arr.forEach((title, completed) => completed && console.log(title));

// 2022-01-09
// var arr = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true,
//   },
// ];

// arr.map((item, index, array) => {
//   (item) => item + 15;
// });

// var a = [10, 15];
// var cb = (n) => n + 15;
// var b = a.map(cb);
// console.log(b); // [25, 30]

// //
// class Todo {
//   constructor(id, userId, title, completed) {
//     this.id = id;
//     this.userId = userId;
//     this.title = title;
//     this.completed = completed;
//   }
// }

// var todo1 = new Todo(10, 20, "Title", false);
// console.log(todo1);

// var cb = function (item, index, array) {
//   return new Todo(item.id, item.userId, item.title, item.completed);
// };

// var todos = arr.map((el) => {
//   return new Todo(el.id, el.userId, el.title, el.completed);
// });

// var todos = arr.map((el) => new Todo(el.id, el.userId, el.title, el.completed));

// var todos = arr.map(cb);

// console.log(todos);

// uzduotis su map

// function map(cb, array) {
//   var newArray = [];
//   for (var i = 0; i < array.lengh; i++) {
//     var item = array[i];
//     var newItem = cb;
//     newArray.push(newItem);
//   }
//   return newArray;
// }

// var b = [3, 4, 5];
// var c = map((a) => a + 2, b); // [5, 6, 7] nauji masyvai
// var d = map((a) => a - 2, b); // [1, 2, 3] nauji masyvai

/*

// copy is destytojo
function map(cb, array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i]; // i = 0
    var newItem = cb(item);
    newArray.push(newItem);
  }
  return newArray;
}

var b = [3, 4, 5];

function cb1(item) {
  return item + 2;
}

function cb2(item) {
  return item - 2;
}

var c = map(cb1, b); // [5,6,7]
var d = map(cb2, b); // [1,2,3]

console.log(c);
console.log(d);

// implementuot find 10:43
// return; // return boolean

function find(cb, array) {
  var item;
  for (var i = 0; i < array.length; i++) {
    var isTrue = cb(array[i]);
    if (isTrue) {
      item = array[i];
      break;
    }
  }
  return item;
}

function cb3(item) {
  // find'ui
  return item === 4;
}
function cb4(item) {
  return item === 1;
}

var e = find(cb3, b);
var f = find(cb4, b);
console.log(e);
console.log(f);

*/

///////////////////////////////////////
// 2022-01-15
// class MyClass {
//   constructor(a, b) {
//     let _a = a;
//     let _b = b;

//     this.getA = function () {
//       console.log(_a);
//     };
//     this.setA = function (newA) {
//       console.log(this);
//       _a = newA;
//     };
//   }
// }

// var myNewClass = new MyClass(1, 2);
// myNewClass.setA(10);
// myNewClass.getA(); // 10 taip padaryti, kad gautusi 10

//////////////////////
// pvz is skaidriu
// https://js.en.sdacademy.pro/_slides/object_oriented_programming_in_javascript/inheritance.html#/3

/*
function Animal(name, size) {
  this.name = name;
  this.size = size;
  this.hello = function () {
    console.log(this.name);
  };
}
console.log(Animal);

function Bird(name, size, speed) {
  //calling the constructor of the parent class
  Animal.call(this, name, size);
  //adding some new properties
  this.speed = speed;
}
console.log(Bird);

//this is how we use it
var a = new Bird("sparrow", 99, 100);
//we have access to the parent class's methods
a.hello();
console.log(a);

*/

//////////////////////
// var myArr = [1, 2, 3];

/*

var arr = [];
for (var i = 1; i < 1000; i = i + 10) {
  arr.push(i);
}
console.log(arr);

// kita uzduotis
var newArr = [];
// for (var sk of arr) {
//   if (sk % 3 === 0) {
//     newArr.push(sk);
//   }
// }
// console.log(newArr);

// kita uzduotis
var arrKvad = [];
// for (var item of newArr) {
//   arrKvad.push(item * item);
// }
// console.log(arrKvad);

// kita uzduotis
var firstEl;
for (var i of arrKvad) {
  if (i >= 5000) {
    firstEl = i;
    break;
  }
}
console.log(i);

// filter
// var cbFilter = (item) => item % 3 === 0;
// var filter = arr.filter(cbFilter);
var filter = arr.filter((item) => item % 3 === 0);
console.log(filter);

// map
// var cbMap = (item) => item * item;
// var map = filter.map(cbMap);
var map = filter.map((item) => item * item);
console.log(map);

// find
var item = map.find((item) => item > 5000);
console.log(item);

*/

///////////////////////////////////
// is destytojo
/*
var arr = [];

for(var i = 1; i < 1000; i = i+10) {
	arr.push(i);
}
console.log(arr);

var newArr = arr.filter(el => el % 3 === 0)
  
var newArr2 = newArr.map(el => el * el)
  
var firstEl = newArr2.find(el => el > 5000)

console.log(newArr);
console.log(newArr2);
console.log(firstEl);

*/

/*

var arr = [
  { name: "a", rank: 9.8 },
  { name: "b", rank: 11 },
  { name: "c", rank: 2 },
  { name: "d", rank: 40 },
];

// v1
var maxValue = 0;
arr.forEach((item) => {
  // console.log(item);
  var currentRank = item.rank;
  if (currentRank > maxValue) {
    maxValue = currentRank;
  }
});
console.log(maxValue);

// v2
var elementWithMaxValue;
arr.forEach((item) => {
  if (elementWithMaxValue === undefined || elementWithMaxValue.rank < item.rank) {
    elementWithMaxValue = item;
  }
});
console.log(elementWithMaxValue);

*/

///////////////////////////////////
// 2021-01-16

/*
// <div id="demo"></div>

var promise1 = fetch("https://jsonplaceholder.typicode.com/todos/");

promise1
  .then(function (resp) {
    return resp.json();
  })
  .then(function (result) {
    document.getElementById("demo").innerText = result[0].title;
  });

  */

// v1

/*

var STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(func) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = []; // array of functions
    func(this.resolve);
  }

  resolve = (value) => {
    setTimeout(() => {
      debugger;
      this.value = value;
      this.state = STATE.FULFILLED;
      var succFunc = this.handlers[0];
      succFunc(value);
    }, 100);
  };

  then(onSuccessFunc) {
    this.handlers.push(onSuccessFunc);
  }
}

var newPromise = new MyPromise(function (resolve) {
  resolve("Greetings from timeOut");
});

newPromise.then(function (result) {
  console.log(result);
});
console.log(newPromise.handlers);

*/

// v2

/*

var STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(func) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = []; // array of functions
    func(this.resolve, this.reject);
  }

  resolve = (value) => {
    setTimeout(() => {
      debugger;
      this.value = value;
      this.state = STATE.FULFILLED;
      var succFunc = this.handlers[0];
      succFunc(value);
    }, 100);
  };

  reject = (value) => {
    setTimeout(() => {
      debugger;
      this.value = value;
      this.state = STATE.REJECTED;
      var errorFunction = this.handlers[1];
      errorFunction(value);
    }, 100);
  };
  then(onSuccessFunc, onError) {
    this.handlers.push(onSuccessFunc);
    this.handlers.push(onError);
  }

  catch(onError) {
    this.handlers[1] = onError;
  }
}

var newPromise = new MyPromise(function (resolve, reject) {
  reject("Reject from timeOut");
});

newPromise.then(function (result) {
  console.log(result, "then");
});
console.log(newPromise.handlers);

*/

///////////////////
// CALLBACK
// https://js.en.sdacademy.pro/_slides/structural_programming_in_javascript/functions.html#/8

//anonymous function, it does something
var f = function (a) {
  return a * 5;
};

//function, accepts a callback as an argument
function go(n, func) {
  return func(n);
}

//calls the function
var rez = go(10, f);
console.log(rez);
