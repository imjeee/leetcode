var twoSum = function(nums, target) {
    var left = 0;
    var right = nums.length-1;
    while(left < right) {
        var sum = nums[left] + nums[right];
        if (sum === target) return [left+1, right+1];
        if (sum < target)
            left++;
        else
            right--;
    }
    return [];
};