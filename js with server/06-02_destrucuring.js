// js with server/06-02_destrucuring.js
let testOdj = require('./06-01_module');

testOdj.print('Hello');
// console.assertlog(plus(1,2));

// 01)Object
let person = {
  firstName : "John",
  lastName : "Doe",
  age : 37,
  email : "john@gamil.com",
  country : "USA"
};

let {lastName, email} = person;
console.log(lastName, email);
console.log(person.lastName);

function getFullName({firstName, lastName}){
  console.log(`${firstName}, ${lastName}`);
}

getFullName(person);

// 02) Array
let scores = [100, 80, 90];

let [a, b, c] = scores;
console.log(a);
console.log(b);
console.log(c);