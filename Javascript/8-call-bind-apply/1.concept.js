// what is call apply bind
var obj = { name: "umesh" };
function sayHello(prefix, sufix) {
  return "hello" + this.name + prefix + sufix;
}

sayHello();
console.log(sayHello.call(obj, "i", "best"));

console.log(sayHello.apply(obj, ["you", "best"]));

const fn = sayHello.bind(obj);
console.log(fn) //resueable fun
console.log(fn("h","u"))
