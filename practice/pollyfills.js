// Array pollyfills
// foreach pollyfill

const arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((item, index) => {
  arr[index] = item + 2;
});

console.log(arr);

// map pollyfill
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const result = arr.myMap((item) => {
  return item + 2;
});
console.log(result);

// filter
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const res = arr.myFilter((item) => {
  return item > 3;
});

console.log(res);

// reduce

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const r = arr.myReduce((acc, cur) => acc + cur);
console.log(r);

// flat prototype

Array.prototype.myFlat = function (depth = 1) {
  const flatten = function (arr, currentDepth) {
    return arr.reduce((acc, val) => {
      if (Array.isArray(val) && currentDepth > 1) {
        return acc.concat(flatten(val, currentDepth - 1));
      } else {
        return acc.concat(val);
      }
    }, []);
  };
  return flatten(this, depth);
};

var nestedArray = [
  [1, 2, 3],
  [4, 5, [6, 7, [8, 9, [10]]]],
  [7, 8, 9],
];

console.log(nestedArray.myFlat(4));

// call apply bind

let car = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `i have purcahse ${this.color} of ${this.company} for ${currency} ${price}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car, "INr", "5lakh");

Function.prototype.myBind = function (context = {}, ...args) {
  context.fn = this;
  return function (...args2) {
    return context.fn(...args, ...args2);
  };
};
const newFun1 = purchaseCar.myBind(car, "rupee");
console.log(newFun1("6lakh"));

// once
function once(fn) {
  let ran;
  return function (...args) {
    if (fn) {
      ran = fn.apply(this, args);
      fn = null;
    }
    return ran;
  };
}
const hello = once(() => console.log("hello"));

hello();
hello();
hello();
hello();
hello();

function PromisePollyFill(executor) {
  let onResolve, onReject;
  function resolve(val) {
    onResolve(val);
  }
  function reject(val) {
    onReject(val);
  }
  this.then = function (cb) {
    onResolve = cb;
    return this;
  };
  this.catch = function (cb) {
    onReject = cb;
    return this;
  };
  executor(resolve, reject);
}

const promise = new PromisePollyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));
