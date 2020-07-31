var runningSum = function(nums) {
    let sum = 0;
    let finalArray = [];
    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        finalArray.push(sum);
    }
    return finalArray;
};
