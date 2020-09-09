var findDuplicates = function(nums) {
    let finalObject = {};
    for (let i=0; i<nums.length; i++) {
        if (!finalObject.hasOwnProperty(nums[i])) {
            finalObject[nums[i]] = 1;
        } else {
            finalObject[nums[i]] += 1;
        }
    }
    let finalArray = [];
    for (let prop in finalObject) {
        if (finalObject[prop] == 2) {
            finalArray.push(prop);
        }
    }
    return finalArray;
};