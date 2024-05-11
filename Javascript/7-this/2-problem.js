// Q-1
const userName = {
  firstName: "umesh",
  getName() {
    const firstName = "num";
    return this.firstName;
  },
};

console.log(userName.getName());

// Q-2
function makeUsr() {
  return {
    name: "umesh",
    ref: this, //create function if we want to refer this
  };
}

let user1 = makeUsr();
console.log(user1.ref, "ref"); //window object

// Q-3

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

// Q-4 object calculator
let calculator = {
  read() {
    this.a = +prompt("enetr a");
    this.b = +prompt("enter b");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Q-5

var length = 4;
function callBack() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    // fn(); //target to global object  4
    arguments[0]();
  },
};
object.method(callBack, 2, 3);

// Q-6 implement calc
const calc = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

function calc1() {
  let value = 0; // Internal state

  return {
    add: function (num) {
      value += num;
      return this; // Return the object to allow chaining
    },
    multiply: function (num) {
      value *= num;
      return this; // Return the object to allow chaining
    },
    subtract: function (num) {
      value -= num;
      return this; // Return the object to allow chaining
    },
    getResult: function () {
      return value; // Return the computed value
    },
  };
}

// Usage
const result1 = calc1().add(10).multiply(5).subtract(30).add(10).getResult();
console.log(result1); // Outputs the result of the operations
