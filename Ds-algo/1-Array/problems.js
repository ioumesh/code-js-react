// Ques1 second largest number
// input:[12,35,1,10,34,1]----->output:34

function secondLargestNumber(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

const input = [12, 35, 1, 10, 34, 1];

console.log(secondLargestNumber(input));

// 2 Rotate array by k
// input:nums =[1,2,3,4,5,6,7] k=3 --->output :[5,6,7,1,2,3,4]

function rotateByk(nums, k) {
  let size = nums.length;
  if (size > k) {
    k = k % size;
  }
  const rotateArray = nums.splice(size - k, size);
  nums.unshift(...rotateArray);
  return nums;
}

console.log(rotateByk([1, 2, 3, 4, 5, 6, 7], 3));

// without inbuilt function

function rotateArray(nums, k) {
  let size = nums.length;
  if (size > k) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}

function reverse(num, left, right) {
  while (left < right) {
    const temp = num[left];
    num[left++] = num[right];
    num[right--] = temp;
  }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// remove duplicates
const dupInput = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(removeDuplicate(dupInput));

// two pointer approach

function removeDup(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(removeDup(dupInput))