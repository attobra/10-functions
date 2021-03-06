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

///////////fisrt class functions and higher order functions///////////
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join('');
};

//Higher Order function
//takes in a function as an argument
const transformer = function (str, fn) {
  console.log(`Transformed string ${str} is now ${fn(str)}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);
