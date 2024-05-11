// Topics
// 1)execution context
// 2)let const var
// 3)block scope shadowing
// 4)Hoisting

// var let and const

// 1)scope => certain region of program where a defined variable exist
//          and can be recognised and beyond that it can not be recognised

// Global scope
// Block scope
// function scope

// var is a functional scope
var a = 5;
console.log(a);

// let and const is block scope
{
  let b;
  b = 10;
  const c = 20;
  console.log(b);
  console.log(c);
}

// 2 shadowing ES6 after let and const
// illegal shadowing var can be shadow by let but viceversa not possible
function shadow() {
  var shadow = "hi i am shadow variable";
  if (true) {
    let shadow = "i am shadow";
    console.log(shadow);
  }
  console.log(shadow);
}

shadow();

// 3 Declartion
var firstName;
var firstName;

let user;
// let user;

const userName = "umesh"; //const can not declare without initialisation and can not re-initialisation
// userName = "kumar";

// 4 Hoisting(Putting on top)
// javascript execution context

let value = 10;

function multiply(x) {
  return x * value;
}

let b = multiply(5);
console.log(b, "multiply");

// creation phase
// execution phase
// callstack

//Hoisting- during the creation phase js moves your variable and function declartion to the top of your code and this is called hoisting

console.log(count);
var count = 10;

// Hoisting in let and const
// console.log(temp);
// let temp = 10;
// hoisted in temporal dead zone
// time between the declartion and the initilization of let and const variable

// Hoisting
test();
function test() {
  console.log("hello hoisting");
}
test();

// variable hoisting
//functions get hoisted
// variable var hoisted
// let and const hoisted in temporal dead zone


