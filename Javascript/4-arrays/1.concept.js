// Array
// map method used to create new array from exisiting one by apply the function to each of the element of array

const nums = [1, 2, 3, 4, 5];

const multiplyBythree = nums.map((item) => {
  return item * 3;
});

console.log(multiplyBythree);

// filter conditional fullfills

const filterResult = nums.filter((item) => {
  return item > 3;
});

console.log(filterResult);

// reduce reduces the value down to one value

const reduceSum = nums.reduce((acc, cur) => {
  return (acc = acc + cur);
}, 0);

console.log(reduceSum);

// 4 map vs foreach

const arr = [2, 3, 4, 5, 6];
// chain method on map
// foreach will modify the original array

const forEachResult = arr.forEach((item, index) => {
  arr[index] = item * 2;
});

console.log(forEachResult);
console.log(arr) //modify the original array

