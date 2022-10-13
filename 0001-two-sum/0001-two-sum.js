/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    
    // for(let left = 0; left < nums.length - 1; left++) {
    //     for(let right = left + 1; right < nums.length; right++) {
    //         if(nums[left] + nums[right] === target) {
    //             return [left, right];
    //         }
    //     }
    // }
};