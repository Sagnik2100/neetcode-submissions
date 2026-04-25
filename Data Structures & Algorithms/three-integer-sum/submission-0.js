class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    let final_arr = [];
    let fix_idx = 0;

    nums.sort((a, b) => a - b);

    while (fix_idx < nums.length - 2) {

        // skip duplicate fixed values
        if (fix_idx > 0 && nums[fix_idx] === nums[fix_idx - 1]) {
            fix_idx++;
            continue;
        }

        let first = fix_idx + 1;
        let last = nums.length - 1;

        while (first < last) {
            const sum = nums[fix_idx] + nums[first] + nums[last];

            if (sum === 0) {
                final_arr.push([nums[fix_idx], nums[first], nums[last]]);

                // skip duplicate first & last
                while (first < last && nums[first] === nums[first + 1]) first++;
                while (first < last && nums[last] === nums[last - 1]) last--;

                first++;
                last--;
            } 
            else if (sum > 0) {
                last--;
            } 
            else {
                first++;
            }
        }

        fix_idx++;
    }

    return final_arr;
}

}
