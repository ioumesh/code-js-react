// object
// everything in js is an object

// object deep copy and shallow copy
const person = {
  name: "umesh",
  address: {
    city: "delhi",
    country: "india",
  },
};

console.log(person.address.city);

const person1 = Object.assign({}, person);
person1.address.city = "mumbai";

console.log(person.address.city);

const person2 = JSON.parse(JSON.stringify(person));
console.log((person2.address.city = "xyz"));
console.log(person);

// 2 object collection of properties and property is associated between key and value
// access modify and delete
const user = {
  name: "umesh",
  age: 29,
  "like me": "you are best",
};

delete user.name;
user["like me"] = "you are always best";
console.log(user);

// 3 dynamic property added
const property = "firstName";
const userValue = "umesh";

const userDetails = {
  [property]: userValue,
};

console.log(userDetails.firstName);

// loop through the all the property
// for in loop

for (key in userDetails) {
  console.log(key);
  console.log(userDetails[key]);
}
