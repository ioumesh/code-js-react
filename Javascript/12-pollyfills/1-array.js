// Array pollyfill
// foreach pollyfill
const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
 
arrData.myForEach((element) => {
  console.log(element);
});

// map pollyfill
Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};

const result = arrData.myMap((item) => {
  return item * 2;
});

console.log(result);

// filter pollyfill
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const filterResult = arrData.myFilter((item) => {
  return item > 3;
});

console.log(filterResult);

// reduce pollyfill

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const reduceResult = arrData.myReduce((acc, cur) => {
  return (acc = acc + cur);
}, 0);

console.log(reduceResult);

// flat prototype
Array.prototype.flatWithDepth = function (depth = 1) {
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

console.log(nestedArray.flatWithDepth(4));
