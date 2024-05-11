// 1 Palindrome number
// An integer is a palindrome when it reads the same forward and backward.

// input x=121 ------>outputtrue;
// input x=10  ------>output false
//method
function isPalindromeNumber(number) {
  if (number < 0) return false;
  return number === +number.toString().split("").reverse().join("");
}

const input = 10;
console.log(isPalindromeNumber(input));

// 2 Fibonacci number
// fibonacci series ->0,1,1,2,3,5,8,13,21,34,55,89,144,233
// f(0)=0, f(1)=1
// f(n)=f(n-1)+f(n-2), for n>1

// input: n=3 --->output 2
function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}

console.log(fib(5));

// using recursion

function fibRecursion(n) {
  if (n <= 1) return n;
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.log(fibRecursion(5));

// 3 valid anagram
// input anagram--nagaram

function checkAnagram(str1, str2) {
  const st1 = str1.split("").sort().join("");
  const st2 = str2.split("").sort().join("");
  return st1 === st2;
}

console.log(checkAnagram("anagram", "nagaram"));

// normal approch

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(isAnagram("ca", "car"));

// 4 two sum return the index  which add up to target
// input: nums =[2,7,11,15] target=9
// ouput [0,1] num[0]+num[1]=9

// brute force approach

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

// using js object

function twoSumObj(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
}

console.log(twoSumObj([2, 7, 11, 15], 9));

// 5Ques best time to buy and sell stocks
// input:prices=[7,1,5,3,6,4] ---->output 5
// input :prices=[7,6,4,3,1]---->output 0

function maxProfit(prices) {
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let currentProfit = prices[j] - prices[i];
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  }
  return globalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// optimised approach
// greedy algorithm

function greedy(prices) {
  let minStockPrice = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPrice) {
      minStockPrice = prices[i];
    }
    const currentProfit = prices[i] - minStockPrice;
    profit = Math.max(profit, currentProfit);
  }
  return profit;
}

console.log(greedy([7, 1, 5, 3, 6, 4]));
