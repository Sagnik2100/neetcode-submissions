class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let first_num ;
        let second_num ;

        for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
            first_num = i + 1 // numbers[i];
            second_num = j + 1 // numbers[j];
            }
        }
        }
        return [first_num , second_num]
    }
}
