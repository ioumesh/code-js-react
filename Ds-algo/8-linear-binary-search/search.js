// search algo
//1 linear search and binary search

// target in nums
// input nums=[4,5,6,7,0,1,2] target=0 output=4

function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) return i;
  }
  return -1;
}
const input = [4, 5, 6, 7, 0, 1, 2];
console.log(linearSearch(input, 1));

// find function similar to linear

// 2 global linear search

function globalLinearSearch(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.length === 0) return -1;
  return result;
}

console.log(globalLinearSearch([4, 5, 0, 7, 0, 1, 2], 4));

// Binary search Algo //sorted array
// target 9
const input1 = [-1, 0, 3, 5, 9, 12];

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
console.log(binarySearch(input1, 9));

// Q-1 kth missing positive number
// k=5
const inputArr = [2, 3, 4, 7, 11];
// [1,5,6,8,9,10]
// output 9
function missingNumber(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return k + count;
}

console.log(missingNumber(inputArr, 5));

// Q-2 maximum count of positive and negative integer

const numsArr = [-2, -1, -1, 1, 2, 3];

// output 3

function maximumCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}

function upperBound(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (nums[mid] < 0) low = mid;
    else high = mid - 1;
  }
  return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > 0) high = mid;
    else low = mid + 1;
  }
  return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

console.log(maximumCount(numsArr))