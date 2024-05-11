// Q1 factorial of n
function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Q2 find range of numbers
// create array with range of numbers
// input start=1 end=5 --->
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(0, 2));

// Q3 check palindrom number
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));

//0,1,1,2,3,5

// Q-4 reverse a string using recursion

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString("hello"));

// Q-5 subsets backtracking algo
// input=[1,2,3]--->[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//input=---->output[[],[1]]

function subsetsBackTrack(nums) {
  let result = [];
  let temp = [];
  function recursiveSubset(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubset(nums, i + 1);
    temp.pop();
    recursiveSubset(nums, i + 1);
  }
  recursiveSubset(nums, 0);

  return result;
}

console.log(subsetsBackTrack([1, 2, 3]));

