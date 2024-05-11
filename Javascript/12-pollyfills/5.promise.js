

function PromisePollyFill(executor) {
  let onResolve,
    onReject,
    isFullFilled = false,
    isReject = false,
    isCalled = false,
    value;
  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isReject = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (callack) {
    onResolve = callack;
    if (isFullFilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (callack) {
    onReject = callack;
    if (isReject && !isCalled) {
      onReject(value);
      isCalled = true;
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
const promiseExample = new PromisePollyFill((resolve, reject) => {
  // setTimeout(() => {
  reject(2);
  // }, 1000);
});

promiseExample.then((res) => console.log(res)).catch((err) => console.log(err));

PromisePollyFill.resolve = (val) => {
  return new PromisePollyFill(function executor(resolve, reject) {
    resolve(val);
  });
};

// promise all pollyfill
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1");
    }, 0);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 0);
  });
}
function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3");
    }, 0);
  });
}

Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }
    let pending = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

Promise.myAll([promise1(), promise2(), promise3()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
