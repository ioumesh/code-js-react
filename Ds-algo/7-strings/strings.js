const str = new String("hello i am string");
console.log(str);
// template litrals backticks
// tagged literals
const str1 = "hey";
console.log`hello world ${str1}`;

// access string length
console.log(str.length);
// access character
console.log(str[2]);
console.log(str.charAt(1));
// loop through string

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
// modifying str
// strings are immutable we can not target using array index

// replace
// replaceAll
const inputStr = "i am input";
const replace = inputStr.replace("i", "sub");
console.log(replace);

// concat
// trim
// searching method
// 1.1) indexOf()
// 1.2)lastindexOf()
// 1.3)startswith (booleans)
// 1.4)endWith()
console.log(inputStr.indexOf("am"));

// extract substring
console.log(inputStr.substring(1, 3));

// slice return a section of str
console.log(inputStr.slice(3));
// tolowercase and touppercase
console.log(inputStr.toLowerCase());
console.log(inputStr.toUpperCase());

// string conversion
const number = 1;
console.log(String(number));

// convert object in string
const obj = {
  name: "umesh",
};

console.log(JSON.stringify(obj))

// ASCII CODE
console.log("A"==="a")
// string comparison

const st1='apple'
const st2="mango"
console.log(st1.localeCompare(st2))

// includes
console.log(st1.includes("apple"))

// split and join
console.log(st1.split("")) //array return


