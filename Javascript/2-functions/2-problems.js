// Q-1 IIFE
(function (x) {
  return (function (y) {
    console.log(x); //this happens beacuse of closures
  })(2);
})(1);

// Q-2 Function scope
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //everytime it will create block
  }, i * 1000);
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //var does not have block scope
  }, i * 1000);
}

//   Q3 function hoisting

var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};

fun();
