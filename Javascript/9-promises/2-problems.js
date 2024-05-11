// Q-1
console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1); //always execute synchonous code first
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// start 1 end 2

// Q-3 when does not give resolve it does not go in then
// Q-4 if given function it will give output after fn call

// Q-5 promise chaining
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("Error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error Caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });

//Q promise chaining
const firstPromise = new Promise((resolve, reject) => {
  resolve("First");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => {
    console.log(res);
  });

//

function loadJson(url) {
  return fetch(url).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
  console.log(err);
});
// convert it into async await

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status === 200) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

// solve promise recursively
function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;

  const curPromise = funcPromises.shift();
  curPromise
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  promRecurse(funcPromises);
}
