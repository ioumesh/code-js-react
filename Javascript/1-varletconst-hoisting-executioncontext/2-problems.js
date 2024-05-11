// Ques1
function abc() {
  //var a=undefined
  console.log(a); //undefined
  var a = 10;
}

abc();

// output undefined
// ques2
function abc1() {
  console.log(a, b, c);
  const c = 30; //error bcan not access before intilization
  let b = 20;
  var a = 10;
}

// abc1();

// ques3

function test() {
  var a = 10;
  var a; //value will update having global scope and used most recent value
  console.log("value " + a);
}

test();

// ques 4
function varTest() {
  var x = 1;
  {
    var x = 2;
    console.log(x); //2
  }
  console.log(x); //2
}

varTest();

function letTest() {
  let x = 1;
  {
    let x = 2;
    console.log(x); //2
  }
  console.log(x);//1
}

letTest();

// ques5
function do_something() {
  console.log(bar); //udefined
  var bar = 111;
  console.log(bar); //111
}

do_something();

// ques6
var rate = 10;
function getRate() {
  //var rate=undefined
  if (rate === undefined) {
    //true
    var rate = 6;
    return rate; //when local and global scope has same name local scope will be priorty
  } else {
    return 10;
  }
}

console.log("rate is ", getRate());

// ques7
{
  let aa = 100;
  var bb = 200;
}
console.log(bb);
// console.log(aa);

// ques8
// console.log(c);
function func() {
  var c = 200;
}
func();
// console.log(c);

// ques9
var x = 23;

(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x);
    var x = 21;
  })();
})();

// ques 10
// explain the scope of temporal dead zone
{
  // TDZ start
  const func = () => console.log(letVar);
  //   TDZ
  let letVar = 3; //TDZ ends //3
  func();
}

// ques 11
{
//   func1();
  const func1 = () => console.log(letVar1); //arrow function are not hoisted
  let letVar1 = 3;
}

// ques12
{
  const func2 = () => console.log(letVar2); //arrow function are not hoisted
//   func2(); //TDZ
  let letVar2 = 3;
}


// ques13 why var hoisting present in js
// ques14 how hoisting works
// js engine in two step first allocate memory
// due to js complier which written in c++ and its complier lang so entire js code pass to v8 engine and 
// give capablity of hoisting
// ques15
func3(); // TypeError: c3 is not a function

var func3 = function func4() {
  console.log(3, "umesh");
};