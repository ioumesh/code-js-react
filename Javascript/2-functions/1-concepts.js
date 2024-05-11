// Functions in javascript
// Q-1 function declarations or function definition or function statement

foo(10);
function foo(num) {
  console.log(num);
}
foo(10);
// functions expression
var c = function () { 
  console.log("hello"); // Anonymous function
};
c();

// 2 First class functions
// function can be treated like a variable
// functin can be passed into another function can be used and manipulated and return from those function

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("square is" + fn(5));
}

displaySquare(square);

// 3 what is IIFE
// immidielty invoked function expression

(function iife(n) {
  console.log("i am iife" + n);
})(5);

// 4 function scope
// functions can access all variable defined in the global scope
//  // The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

// 5 hoisting in functions
  hoist();
  function hoist() {
    console.log("i am hosited"); //function hoisted completely
  }

// 6 params vs arguments

function paramArgs(num1, num2) {
  //params
  console.log(arguments);
}

paramArgs(2, 3); //arguments

// 7 spread and rest operator
function multiply(num1, num2, ...nums) {
  //rest operator
  console.log(nums);
  console.log(num1 * num2);
}

const arr = [5, 6];

multiply(...arr); //spread operator

// 8 callback functions
// call back function is a function passed into another function as a arguments
// which is then invoked inside the outer function to complete some kind of actions

document.addEventListener("click", function () {
  console.log("click");
});

// 9 Arrow function  vs normal function

const add = (firstName, secondName) => firstName + secondName;

// 1 syntax
// 2 implicit return keywords
// 3 arguments in normal function but not in arrow function
// 4)this in normal function not in arrow

let user = {
  userName: "umesh",
  rc1: function () {
    console.log(this.userName);
  },
  rc2: () => {
    console.log(this.userName,"value");
  },
};

user.rc1();
user.rc2();
