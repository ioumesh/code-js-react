function debouce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
}

const apiCalling = () => {
  console.log("api calling ....");
};
const debouceCall = debouce(apiCalling, 2000);
const input = document.getElementById("input-box");

input.addEventListener("input", () => {
  debouceCall();
});
