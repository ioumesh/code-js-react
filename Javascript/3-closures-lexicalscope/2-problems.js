// Q-1
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //shadowing
    console.log(count); //1
  }
  console.log(count); //0
})();

// Q-2
function createBase(base) {
  return function (num) {
    console.log(base + num);
  };
}

var addSix = createBase(6);
addSix(10);
addSix(21);

// Q-3 time optimization using closure
function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");

// Q-4 block scope and setTimeout
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}
// scope has same value  that is why 3
a();

// Q-using closure

function b() {}
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  } //create whole diffrent memory space
  inner(i);
}

b();

// Q-5 Private counter

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function get() {
    return "Counter is" + _counter;
  }

  return {
    add,
    get,
  };
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.get());

// Q-6 module pattern
var module = (function () {
  function privateMethod() {
    console.log("private method");
  }
  return {
    publicMethod: function () {
      // can call private method
      console.log("public method");
      privateMethod();
    },
  };
})();

module.publicMethod();
// module.privateMethod();

// Q-7 run only once
let view;
function likeTheVideo() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("num is always best");
    } else {
      view = "Num";
      console.log(view + "is best");
      called++;
    }
  };
}

const isView = likeTheVideo();
isView();
isView();
isView();

// memoize function

function memoize(fn) {
  // Initialize an empty object to store cached results
  let cache = {};

  // Return a new function
  return function (...args) {
    // Convert the array of arguments into a string
    // This string will serve as a unique key in the cache object to store and retrieve results.
    let argsCache = JSON.stringify(args);

    // Check if the stringified arguments exist in the cache
    if (argsCache in cache) {
      // If the result exists in the cache, log a message indicating it
      console.log("value is coming from cache");
      // Return the cached result
      return cache[argsCache];
    } else {
      // If the result is not in the cache, log a message indicating it
      console.log("value is calculating");
      // Call the original function with the provided arguments
      const result = fn.apply(this, args);
      // Store the result in the cache for future use
      cache[argsCache] = result;
      // Return the calculated result
      return result;
    }
  };
}

const addThreeNumbers = (a, b, c) => {
  return a + b + c;
};

const add = memoize(addThreeNumbers);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));

const factorial = memoize((x) => {
  if (x < 2) return 1;
  return x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(6));
