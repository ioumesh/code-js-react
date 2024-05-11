// closure and lexical scope

function closure() {
  var value = "outer";
  function inner() {
    console.log(value);
  }
  return inner();
}

closure();

// scope chaining
var e = 10;

function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log(add(1)(2)(3)(4));

// time optimization using closure
function find() {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}
//

function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
}
// scope has same value  that is why 3
// a();

// private counter

function privateCounter() {
  let _counter = 0;

  function add(num) {
    _counter = _counter + num;
  }
  function get() {
    return _counter;
  }
  return { add, get };
}

const c = privateCounter();
c.add(10);
console.log(c.get());

function likeTheVideo() {
  let called = 0;
  return function () {
    if (called) {
      console.log("already sub");
    } else {
      console.log("subscfibe");
      called++;
    }
  };
}

const isView = likeTheVideo();
isView();
isView();
isView();

// memoize function
function memoize(fn, context) {
  let cache = {};
  return function (...args) {
    const argsToStr = JSON.stringify(args);
    if (argsToStr in cache) {
      console.log("value is coming from cache");
      return cache[argsToStr];
    } else {
      console.log("value is calculating");
      const result = fn.apply(context || this, args);
      cache[argsToStr] = result;
      return result;
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const memo = memoize(sum);
console.log(memo(1, 2, 3));
console.log(memo(1, 2, 3));

// factorial function

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}
const memoFac = memoize(factorial);
console.log(memoFac(5));
console.log(memoFac(5));

// flatten an array

function flattenArray(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc = acc.concat(flattenArray(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}
const input = [1, [1, 2], [4, 5]];
console.log(flattenArray(input));

// currying and partial
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
//partial application
const s = sum(10);
console.log(s(1, 2));

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
// currying is used to manipulate dom
const multiply = (a, b, c) => a * b * c;
const curried = curry(multiply);
console.log(curried(2)(3)(4)); // 24

console.log(curried(2, 3)(4)); // 24

console.log(curried(2, 3, 4)); // 24

console.log(curried(5)(6, 7)); // 210

//
function add1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

// Ques2
// evaluate("sum")(4)(2)=>6
// evaluate("multiply")(4)(2)=>8
// evaluate("divide")(4)(2)=>2
// evaluate("subtract")(4)(2)=>2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") {
        return a + b;
      }
    };
  };
}

console.log(evaluate("sum")(4)(0));

//
function infiniteSum(a) {
  return function (b) {
    if (b !== undefined) {
      return infiniteSum(a + b);
    }
    return a;
  };
}

console.log(infiniteSum(1)(2)(3)(4)());

//
function curryFn(num) {
  let prevSum = 0;
  return function (newsum = 0) {
    prevSum = prevSum + newsum;
    return prevSum;
  };
}
const sum1 = curryFn();
console.log(sum1(1));
console.log(sum1(3));
console.log(sum1(3));
console.log(sum1(4));
console.log(sum1());

//

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log("Promise constructor");
  resolve("Resolved");
});

promise.then((res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

//
const add2 = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);
const addAndMultiply = pipe(multiplyByTwo, add2);
console.log(addAndMultiply(3));

//
// 3 dynamic property added
const property = "firstName";
const userValue = "umesh";

const userDetails = {
  [property]: userValue,
};

console.log(userDetails);

let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

function multiplyByTwo1(nums) {
  for (let key in nums) {
    if (typeof nums[key] === "number") {
      nums[key] = nums[key] * 2;
    }
  }
}

console.log(multiplyByTwo1(nums));

let d = { greeting: "hey" };
let f;
f = d;
f.greeting = "hello";
console.log(f.greeting);

let person3 = { name: "umnum" };
const members = [person3]; //we are not chnaging key
person3 = null;
console.log(members);
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "john",
    age: 50,
  };
  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);
console.log(personObj2);

//
const obj = {
  a: 1,
  b: {
    c: [
      {
        d: "d1",
      },
      {
        z: "z1",
      },
    ],
    m: "m2",
  },
};

function findMatchingObjectProperty(obj, [key, value]) {
  for (let prop in obj) {
    let current = obj[prop]; //value

    if (prop === key && current === value) {
      return true;
    }

    if (typeof obj === "object") {
      if (findMatchingObjectProperty(current, [key, value])) {
        return true;
      }
    }
  }
  return false;
}
console.log(findMatchingObjectProperty(obj, ["z", "z1"]));

// this
const userName = {
  firstName: "umesh",
  getName() {
    const firstName = "num";
    return this.firstName;
  },
};

console.log(userName.getName());

const detailsUser = {
  name: "numumesh",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(detailsUser.logMessage, 1000); //it does not has access it has window object

setTimeout(() => {
  detailsUser.logMessage();
}, 1000);

var length1 = 4;
function callBack() {
  console.log(this.length1);
}

const object = {
  length1: 5,
  method(fn) {
    // fn(); //target to global object  4
    arguments[0]();
  },
};
object.method(callBack, 2, 3);

function calc1() {
  let total = 0;
  function add(n) {
    total = total + n;
    return this;
  }
  function multiply(n) {
    total = total * n;
    return this;
  }
  function subtract(n) {
    total = total - n;
    return this;
  }
  function getResult(n) {
    return total;
  }
  return { add, multiply, subtract, getResult };
}

const result = calc1().add(10).multiply(5).subtract(30).add(20).getResult();
console.log(result, "result");

//

let obj1 = { name: "umesh" };

function sayHello(prefix, sufix) {
  console.log(this.name, prefix, sufix);
}

sayHello.call(obj1, "h", "i");
sayHello.apply(obj1, ["h", "i"]);
const fn = sayHello.bind(obj1);
console.log(fn("h", "j"));

// promise

function register() {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      console.log("register");
      reject();
    }, 1000);
  });
}

function login() {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      console.log("login");
      resove();
    }, 1000);
  });
}

async function flow() {
  try {
    await register();
    await login();
  } catch (error) {
    console.log(error);
  }
}

flow();

console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1); //always execute synchonous code first
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

//
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("Error");
    }
  });
}

let promise2 = job(true);

promise2
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error Caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });

// debounce

function debouce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
}

function thottle(cb, limit) {
  let isThottle;
  return function (...args) {
    if (!isThottle) {
      cb(args);
      isThottle = true;
      setTimeout(() => {
        isThottle = false;
      }, limit);
    }
  };
}
