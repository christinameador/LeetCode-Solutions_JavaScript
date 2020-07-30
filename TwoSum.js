function twoSum(nums, target) {
  var result = []
  nums.forEach(function(num, i) {
    var diff = target - num
    var k = nums.indexOf(diff)
    if (k > -1 && k !== i) {
       result[0] = i
       result[1] = k
       return true
    }
  })
  return result
}
