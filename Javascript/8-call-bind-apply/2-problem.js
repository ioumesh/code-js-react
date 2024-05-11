// Q-1 call with function inside object
var age = 10;

var person = {
  name: "umesh",
  age: 24,
  getAge: function () {
    return this.age;
  },
};

const person2 = { age: 29 };

console.log(person.getAge.call(person2));

// Q2
var status = "one";
setTimeout(() => {
  const status = "two";
  const data = {
    status: "three",
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus()); //three
  console.log(data.getStatus.call(this)); //one //this never points to function and settimeout is a function so instead settimeout pointed to global object
}, 0);

// Q-3 call printAnimals such that it prints all animals in object

const animals = [
  { species: "Lion", name: "king" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + "" + this.species + ":" + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// Q-4 append an array to another aaray

const array = ["a", "b"];
const element = [1, 3, 4];

array.push.apply(array, element);
console.log(array);

// Q-5 find min and max number in an array
const numbers = [5, 6, 2, 3, 7];
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers));
// loop based algo
let max = -Infinity,
  min = +Infinity;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log(max, min);

//6 bound function

function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};

user.g();

// bind chaining

function fm() {
  console.log(this.name);
}

const ff = fm.bind({ name: "umesh" }).bind({ name: "num" });
// bind chaining does not exist function which is bound can not be bound with other
ff();

// code works

function checkPassword(success, failed) {
  let password = prompt("enter password");
  if (password === "umesh") success();
  else {
    failed();
  }
}

const userData = {
  name: "love",
  login() {
    console.log(this.name + "logged in ");
  },
};

// checkPassword(userData.login.bind(userData));

// partial application for login

const userData1 = {
  name: "love",
  login(result) {
    console.log(this.name + (result ? "logged in " : "login failed"));
  },
};

checkPassword(
  userData1.login.bind(userData1, true),
  userData1.login.bind(userData1, false)
);

// explicit binding with arrow function

// we cant manipulate context of arrow function
