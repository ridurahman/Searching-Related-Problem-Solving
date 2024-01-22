function findIndex(nums, target) {
  let index = -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = parseInt((left + right) / 2);
    if (parseInt(nums[middle]) == target) {
      index = middle;
      break;
    } else if (parseInt(nums[middle]) < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return index;
}

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
console.log(findIndex(nums, target));
let nums2 = [-1, 0, 3, 5, 9, 12];
let target2 = 2;
console.log(findIndex(nums2, target2));
