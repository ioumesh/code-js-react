//1 call pollyfill
let car = {
  color: "red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `i have purcahse ${this.color} of ${this.company} for ${currency} ${price}`
  );
}
// call pollyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "it is not callable");
  }
  context.fn = this;
  context.fn(...args);
};

// apply pollyfill

Function.prototype.myApply = function (context = {}, args = []) {
  if (!Array.isArray(args)) {
    throw new Error("params should be array");
  }
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(car, "INr", "5lakh");
purchaseCar.myApply(car, ["inr", "5lakh"]);
const newFun = purchaseCar.bind(car);
console.log(newFun("inr", "5lakh"));
// bind pollyfill

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it is not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFun1 = purchaseCar.myBind(car, "rupee");
console.log(newFun1("6lakh"));


