function memoize(fn, context) {
  let cache = {};
  return function (...args) {
    let argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log("value is coming from cache");
      return cache[argsToString];
    } else {
      console.log("value is calculating");
      const result = fn.apply(context || this, args);
      cache[argsToString] = result;
      return result;
    }
  };
}

function addThreeNumbers(a, b, c) {
  return a + b + c;
}
const memo = memoize(addThreeNumbers);
console.log(memo(5, 6, 7));
console.log(memo(5, 6, 7));

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

const memoFac = memoize(factorial);
console.log(memoFac(5));
console.log(memoFac(5));
