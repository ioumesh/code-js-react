// bubble sort sort in ascending order
// output [10,14,14,29,37]
const numsArr = [29, 10, 14, 37, 14];

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

console.log(bubbleSort(numsArr));

// inbuilt sort
const nums = [10, 5, 18, 1, 27];

// compare function
function compare(a, b) {
  return b - a;
}
console.log(nums.sort(compare));

// selection sort
