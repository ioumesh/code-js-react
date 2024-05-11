// Ques1 sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1)); 

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
      if (operation === "multiply") {
        return a * b;
      }
      if (operation === "divide") {
        return a / b;
      }
      if (operation === "subtract") {
        return a - b;
      }
    };
  };
}
// reuse variable for logic

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("subtract")(4)(2));

// Ques3 infinite currying
// sum(1)(2)(3)....n

function infiniteSum(a) {
  return function (b) {
    if (b) {
      return infiniteSum(a + b);
    }
    return a;
  };
}

console.log(infiniteSum(1)(2)(3)(4)());

// curry function
function curryFn() {
  let prevSum = 0;
  return function (newSum = 0) {
    prevSum = prevSum + newSum;
    return prevSum;
  };
}
const sum1 = curryFn();
console.log(sum1(1));
console.log(sum1(3));
console.log(sum1(3));
console.log(sum1(4));
console.log(sum1());
