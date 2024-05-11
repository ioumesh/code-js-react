function throttle(cb, limit) {
  let isThrottle;
  return function (...args) {
    if (!isThrottle) {
      cb(args);
      isThrottle = true;
      setTimeout(() => {
        isThrottle = false;
      }, limit);
    }
  };
}

const shooting = () => {
  console.log("shooting...");
};
const shootThrottle = throttle(shooting, 3000);
const btn = document.getElementById("shoot");

btn.addEventListener("click", () => {
  shootThrottle();
});
