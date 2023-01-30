const containsDuplicate = function (nums) {
  const mapper = {}
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i]
    if (mapper[ele]) { return true } else { mapper[ele] = true }
  }
  return false
}
console.log(containsDuplicate([1, 2, 3, 4, 5]))
