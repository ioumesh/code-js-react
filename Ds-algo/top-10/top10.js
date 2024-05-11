// 1 reverse a string
const input = "hello";

function revStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}

console.log(revStr(input));

// method 2
function inbuiltRevStr(str) {
  const restr = str.split("").reverse().join("");
  return restr;
}

console.log(inbuiltRevStr(input));

// 2flat an array
const input1 = [1, [2, 3], [4, 5, 6], [7, 8, 9]];

function flaaten(arr) {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc = acc.concat(flaaten(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

console.log(flaaten(input1));

// 3 stack question valid parenthesis
// ()[]{}

function checkValidParenthesis(str) {
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];
  for (let item of str) {
    if (item === "(" || item === "[" || item === "{") {
      stack.push(item);
    } else {
      if (map[stack.pop()] !== item) return false;
    }
  }
  return true;
}

const input0 = "()";
const input2 = "()[]{}";
const input3 = "([)]";
const input4 = "(]";

console.log(checkValidParenthesis(input3));

// 3- first non repeating character
function firstNonRepeatingchar(str) {
  let obj = {};
  for (let item of str) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) return str.indexOf(key);
  }
  return -1;
}
const in1 = "kirandeep"; //k let-index 0
const in2 = "iiilllbbbq"; //q-index 9
const in3 = "aabcc"; //b index 2
const in4 = "aabb"; //nothing return -1

console.log(firstNonRepeatingchar(in1));
console.log(firstNonRepeatingchar(in2));
console.log(firstNonRepeatingchar(in3));
console.log(firstNonRepeatingchar(in4));

// 4 find longest word

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("i love coding in javascript"));

// 5 remove duplicate

function removeDuplicate(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicate([1, 2, 3, 4, 4, 5, 6, 6]));

function removeDuplicates1(arr) {
  const dup = [...new Set(arr)];
  return dup;
}
console.log(removeDuplicates1([1, 2, 3, 4, 4, 5, 6, 6]));

// 6 count vowels
function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello world"));

// 7  find larget number in array
function findLargestNumber(arr) {
  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
console.log(findLargestNumber([2, 4, 6, 9, 3]));

// 8
const obj = {
  key1: [
    {
      name: " sourabh ",
      age: 26,
    },
    {
      name: "umesh",
      age: 28,
    },
  ],
  key2: [
    {
      name: "sanjiv",
      age: 26,
    },
    {
      name: " rohit ",
      age: 28,
    },
  ],

  key3: [" apple ", "mango", " ", null, undefined],
  key4: [1, 2, 3, 4, 5, 6, null, undefined],
  key5: 1,
  key6: null,
  key7: " ",
  key8: undefined,
  key9: " i am string ",
};

function cleanObject(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key]
        .map((item) => {
          if (typeof item === "object" && item !== null) {
            // If it's an object and not null, recursively clean it
            return cleanObject(item);
          } else if (typeof item === "string") {
            // If it's a string, trim it
            return item.trim();
          } else {
            return item;
          }
        })
        .filter((value) => ![null, undefined, ""].includes(value));
    } else if (typeof obj[key] === "string") {
      obj[key] = obj[key].trim();
      if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    } else if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}

const cleanedObj = cleanObject(obj);
console.log(cleanedObj);

// 9 flatten a deeply nested object
const obj2 = {
  a: "12",
  b: 23,
  c: {
    p: 23,
    o: {
      l: 56,
    },
    q: [1, 2],
  },
};

function flattenObject(obj, parent) {
  const finalObj = {};
  const generateFlattenObj = (obj, parent) => {
    for (let key in obj) {
      let newParent = parent + key;
      let value = obj[key];
      if (typeof value === "object") {
        generateFlattenObj(value, newParent + ".");
      } else if (value !== undefined) {
        finalObj[newParent] = value;
      }
    }
  };
  generateFlattenObj(obj, parent);
  return finalObj;
}

console.log(flattenObject(obj2));

// fltten obj based on callback

const callback = (element) => typeof element === "string";

const inputObj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

function filter(collection, callback) {
  // DO NOT REMOVE
  "use strict";

  // write your code below
  const filterByRecursion = (collection, callback) => {
    //collectionnested obj , callback return true and false
    Object.keys(collection).forEach((item) => {
      if (typeof collection[item] === "object") {
        const value = filterByRecursion(collection[item], callback);
        if (Object.keys(value).length === 0) {
          //no keys delete it
          delete collection[item];
        }
      } else {
        if (!callback(collection[item])) {
          //it will check value is not object false delete it
          delete collection[item];
        }
      }
    });
    return collection;
  };

  return filterByRecursion(collection, callback);
}
console.log(filter(inputObj, callback));

// object
const sampleObj = [
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample2",
    data: "data1",
  },
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample3",
    data: "data1",
  },
  {
    key: "sample4",
    data: "data1",
  },
];

let output = {};

sampleObj.forEach((item) => {
  if (output[item.key]) {
    if (Array.isArray(output[item.key])) {
      output[item.key].push(item);
    } else {
      output[item.key] = [output[item.key], item];
    }
  } else {
    output[item.key] = item;
  }
});

console.log(output);


// char count
function countCharacters(str) {
  const charCount = {};

  // Loop through each character in the string
  for (let char of str) {
      // If the character is already in the charCount object, increment its count
      if (charCount[char]) {
          charCount[char]++;
      } else {
          // Otherwise, initialize its count to 1
          charCount[char] = 1;
      }
  }

  return charCount;
}

// Example usage
const result = countCharacters("hello");
console.log(result);