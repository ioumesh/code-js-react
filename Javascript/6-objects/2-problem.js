//dirty obj
// flatten obj
const func = (function (a) {
  delete a; //only used when want to delete property from an object
  return a;
})(5); //5 output

console.log(func);

// Q-2
const obj = {
  a: "one",
  b: "two",
  a: "three", //two key with same name and it will replace by latest
};

// three and two
console.log(obj);

// Q-3 create  a function  multiplyBytwo all the numeric value
let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyByTwo(nums);

console.log(nums);

// Q-4
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a); //due to same reference
console.log(a[b]);
// 456

// Q-4 JSON.stringfy and JSON.parse

const objParse = {
  name: "num",
};

const strObj = JSON.stringify(objParse);
console.log(JSON.parse(strObj));

// storting in inside our local storage
localStorage.setItem("test", strObj);

console.log(localStorage.getItem("test"));

// Q-5
// spread operator
console.log([..."love"]);

const user1 = { name: "lobe", age: 21 };
const admin = { admin: true, ...user1 };

console.log(admin);

// Q-6
const settings = {
  userName: "num",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]); //it will only stringfy given array property
console.log(data);

// Q-7

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2; //20
  },
  perimeter: () => 2 * Math.PI * this.radius, //NAN
};

console.log(shape.diameter());
console.log(shape.perimeter());

// Q-8
// destructure of property

const des = {
  name: "num",
  fullName: {
    first: "n",
    second: "nn",
  },
};

const {
  name: userName,
  fullName: { first },
} = des;

console.log(userName);
console.log(first);

// Q-9
function getItem(fruitlist, favFruit, ...args) {
  //last
  return [...fruitlist, ...args, favFruit]; //spread opt can be used in between
}

console.log(getItem(["apple", "banana"], "peer", "orange"));

// Q-10 object reference

let d = { greeting: "hey" };
let e;
e = d;
e.greeting = "hello";
console.log(e.greeting);

// Q-11
console.log({ a: 1 } === { a: 1 });
console.log({ a: 1 } == { a: 1 });

// Q-12
let person3 = { name: "umnum" };
const members = [person3]; //we are not chnaging key
person3 = null;
console.log(members);

// Q-13
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); //20
multiply(); //20
multiply(value);
multiply(value);

// Q-14

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
