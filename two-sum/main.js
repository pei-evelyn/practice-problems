const twoSum = (nums, target) => {
  let indexArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (nums[i] + nums[k] === target && i !== k) {
        indexArr.push(i)
        indexArr.push(k)
      }
    }
    if (indexArr.length === 2) {
      break;
    }
  }
  return indexArr;
}

// return index of two numbers so that they add up to target
// will only have one solution, cannot use element twice

// set variable indexArr to empty array
// loop through the array nums
//  set another loop inside loop through
// conditional if i === k ignore or skip
// if nums[i] + nums[k] === target
// push i and k into indexArr
// return indexArr
