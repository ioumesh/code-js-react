function once(fn, context) {
  let ran;
  return function (...args) {
    if (fn) {
      ran = fn.apply(context || this, args);
      fn = null;
    }
    return ran;
  };
}

const hello = once(() => console.log("hello"));

hello();
hello();
hello();
hello();
hello();
