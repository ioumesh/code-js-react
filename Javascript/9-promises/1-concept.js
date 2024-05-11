// promises
// synchronous and asynchronous code

// console.log("start");

// console.log("umesh");

setTimeout(() => {
  //   console.log("login"); //js is single threaded language and it can not execute in parallel
}, 2000);

// console.log("end");

// event loop

// console.log("start1");

function importantAction(user) {
  setTimeout(() => {
    console.log(user);
  }, 2000);
}
// const message = importantAction("umesh");
// console.log(message);
// console.log("end1");

// callbacks

// console.log("start1");

function importantAction1(user, cb) {
  setTimeout(() => {
    cb(user);
  }, 2000);
}
// const message1 = importantAction("umesh", function (msg) {
//   console.log(msg);
// });
// console.log(message1);
// console.log("end1");

// callback hell
console.log("Application start");
function register(cb) {
  setTimeout(() => {
    console.log("register");
    cb();
  }, 2000);
}

function verify(cb) {
  setTimeout(() => {
    console.log("verify");
    cb();
  }, 400);
}

function login(cb) {
  setTimeout(() => {
    console.log("login");
    cb();
  }, 1000);
}

function logout(cb) {
  setTimeout(() => {
    console.log("logout");
    cb();
  }, 200);
}

// register(() => {
//   verify(() => {
//     login(() => {
//       logout(() => {
//         console.log("Application ends"); //nesting is called callback hell
//       });
//     });
//   });
// });

// solution promises
// promises is an special object which returns two things resolve or reject

console.log("promise start");
const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    let result = true;
    if (result) {
      resolve("i am resolved ");
    } else {
      reject("i am rejected");
    }
  }, 2000);
});

// console.log(
//   sub.then((res) => console.log(res)).catch((err) => console.log(err))
// );
// console.log(sub);
console.log("promise end");

// promise.resolve

Promise.resolve("umesh is best").then((res) => {
  console.log(res);
});

// rewirte
function register1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("register");
    }, 2000);
  });
}

function verify1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("verify");
    }, 100);
  });
}

function login1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("login");
    }, 1000);
  });
}

function logout1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("logout");
    }, 500);
  });
}

// register1()
//   .then(verify1)
//   .then(login1)
//   .then(logout1)
//   .catch((err) => console.log(err)); //promise chaining

//modern approch
async function result() {
  await register1();
  await verify1();
  await login1();
  await logout1();
}

// result();

// promise combinator

// promise.all it will resolve all promise if any one get reject it will reject it takes array
console.log(
  Promise.all([register1(), verify1(), login1(), logout1()])
    .then((res) => console.log(res))
    .catch((err) => console.log("promise failed", err))
);

// promise.race

console.log(
  Promise.race([register1(), verify1(), login1(), logout1()])
    .then((res) => console.log(res))
    .catch((err) => console.log("promise failed", err))
);

//   promise all settled

console.log(
  Promise.allSettled([register1(), verify1(), login1(), logout1()])
    .then((res) => console.log(res))
    .catch((err) => console.log("promise failed", err))
);

console.log(
  Promise.any([register1(), verify1(), login1(), logout1()])
    .then((res) => console.log(res)) //only resolved fullfilled and ignore other
    .catch((err) => console.log("promise failed", err))
  // when all promise rejectd the it will give error
);
