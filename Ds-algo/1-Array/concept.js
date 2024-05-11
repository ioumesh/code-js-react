//1) how to declare and create array
let arry = new Array(1, 2, 3);
console.log(arry);
const arr = [1, 2, 3, 4];

//2) Add and remove the element from the array
// push-pop
// unshift-shift

const input = [1, 2, 3, 4];
console.log(input.push("5")); // insert at last
console.log(input);
console.log(input.pop()); // remove from last
console.log(input);
console.log(input.shift()); //remove from start
console.log(input);
console.log(input.unshift("0")); // add to start
console.log(input);

// 3 loops
// for and while loop
const data = ["apple", "mango", "banana"];
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

//
let i = 0;
while (i < data.length) {
  console.log(data[i]);
  i++;
}

// built in loop
// map
// filter
// reduce
// some --either true or false
// every-- if every satisfy true or false
// find-- partiular element return

// spread and rest operator

//4 Array methods
// concat combine and return to new array

const num1 = [1, 2];
const num2 = [4, 5];
const nums = num1.concat(num2);
console.log(nums);

// slice -- certain part of certain number
console.log(num1.slice(0, 1)); //return 0th index

// splice remove and insert to delted element
const st = ["apple", "mango", "cheery"];
st.splice(1, 2, "orange");
console.log(st); //makes the changes to original array

// fill
const dummy = [1, 2];
dummy.fill(0, 1);
console.log(dummy);

// findIndex
console.log(dummy.findIndex((item) => item == 1));

// flat
// sort
// reverse

