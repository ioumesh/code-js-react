// closure is a function that references variables in the outer scope from its inner scope

// lexical scope
// scope refers to current context of your code either global or local
// variable defines outside the funciton can be accssed inside the another function defined after a variable declration
// but viceversa is not possbile

// global scope
var userName = "umesh";

function local() {
  // localscope
  console.log(userName);
}

local();

// lexical scope is definition space or static scope
// This process or the ability of the function to be able to access variables of the parent is called lexical scope. In other words, the inner child function is always lexically bound to its parent and can always access its variables.
// 2// closure the ability of a function to remember variable and funtion lexically out of it its scope is called closure
// global scope
// lexical scope in JavaScript refers to the ability of an inner function to access variables and functions defined in its outer function or parent function, but not the other way around.
function subscribe() {
  var name = "coder";
  //   inner scope2
  function displayName() {
    // inner scope
    alert(name);
  }
  displayName(); //closure
}

// subscribe();

// 3closure scope chain

var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer function scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));
