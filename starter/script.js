'use strict';
//////////////////DEFAULT PARAMETERS///////////
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', undefined, 500);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Shedtmann',
//   passport: 2472748505860,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 2472748505860) {
//     alert('Checked in');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn(flight, jonas);
// //flight does not change but jonas will have its reference changed.
// console.log(flight);
// console.log(jonas);

// //is the same as doing
// //const flightNum = flight
// //const passenger = jonas

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// ///////////fisrt class functions and higher order functions///////////
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join('');
// };

//Higher Order function
//takes in a function as an argument
// const transformer = function (str, fn) {
//   console.log(`Transformed string ${str} is now ${fn(str)}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// const high5 = function () {
//   console.log('👋');
// };
// //callbacks
// document.body.addEventListener('click', high5);
// ['mareath', 'alpha', 'gjkb'].forEach(high5);

//function that return a new function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}! ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Nora');
// greeterHey('Habib');
// greet('Bonjour...')('Emily');

// //new greet function using arrow finction
// const greetArrow = greeting => name => console.log(`${greeting}..... ${name}`);

// greetArrow('good night')('Haym');

/////////////////CALL AND APPLY////////////////////
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.iataCode}${flightNum} for airline ${this.airline}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(230, 'Aleph Meite');
lufthansa.book(134, 'John Meite');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
book.call(eurowings, 23, 'sarah williams');
console.log(eurowings);

book.call(lufthansa, 230, 'mary cooper');
console.log(lufthansa);

// const flightData = [555, 'George Cooper'];
// book.call(swiss, ...flightData);

//BIND Method
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams ');

//When we use objects with event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//using bind gives us a new function
const addVAT = addTax.bind(null, 0.23);

const newAddVAT = rate => value => value * (1 + rate);

const addVAT2 = newAddVAT(0.23);
console.log(addVAT2(10000));
