// find the subarray with the largest sum
// input=[-2,1,-3,4,-1,2,1,-5,4]===>6 [4,-1,2,1]

// brute force

function maxSumSubAraay(nums) {
  let maxSum = nums[0];
  let startInx = 0;
  let endIndx = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentsum = 0;
    for (let j = i; j < nums.length; j++) {
      currentsum = currentsum + nums[j];
      if (currentsum > maxSum) {
        maxSum = currentsum;
        startInx = i;
        endIndx = j;
      }
    }
  }
  return { sum: maxSum, subArray: nums.slice(startInx, endIndx + 1) };
}

console.log(maxSumSubAraay([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//

function kadaneSum(nums) {
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum
}

console.log(kadaneSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))