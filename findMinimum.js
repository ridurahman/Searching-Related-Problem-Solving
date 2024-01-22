function findMinimum(nums) {
  let minElement = nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = parseInt((left + right) / 2);
    if (parseInt(nums[middle]) < parseInt(nums[middle - 1])) {
      minElement = nums[middle];
      break;
    } else if (parseInt(nums[middle]) > parseInt(nums[right])) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return minElement;
}

let nums = [3, 4, 5, 1, 2];
console.log(findMinimum(nums));

let nums2 = [4, 5, 6, 7, 0, 1, 2];
console.log(findMinimum(nums2));

let nums3 = [11, 13, 15, 17];
console.log(findMinimum(nums3));

let nums4 = [4, 5, 1, 2, 3];
console.log(findMinimum(nums4));
