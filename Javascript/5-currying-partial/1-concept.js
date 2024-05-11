// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
// It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
// created using closures

// Q-1 why should use currying
// Why should currying be used?
// Following are the reasons why currying is good :

// ✅ It makes a function pure which makes it expose to less errors and side effects.

// ✅ It helps in avoiding the same variable again and again.

// ✅ It is a checking method that checks if you have all the things before you proceed.

// ✅ It divides one function into multiple functions so that one handles one set of responsibility.

// How does currying work?
// Currying is a function that takes multiple arguments as input. It transform the function into a number of functions where every function will accept one argument.

//Ques currying and partial application

// curried functions depend on number of arguments
// partial application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = sum(10);
console.log(x(1, 2));
console.log(x(1, 3));
// or

console.log(sum(10)(1, 2));

// to manipulte dom currying

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading");

updateHeader("hello currying");

// curry implementation
// convert f(a,b,c) into f(a)(b)(c)

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
const multiply = (a, b, c) => a * b * c;

const curried = curry(multiply);

console.log(curried(2)(3)(4)); // 24

console.log(curried(2, 3)(4)); // 24

console.log(curried(2, 3, 4)); // 24

console.log(curried(5)(6, 7)); // 210

console.log(curried(1, 2, 3));
console.log(curried(1, 2)(5));
// console.log(curried(1)(2)(3)(4)(5));
