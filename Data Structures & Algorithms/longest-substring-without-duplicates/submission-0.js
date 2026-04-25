class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let arr = Array.from(s);
    let first = 0;
    let charSet = new Set();
    let maxLength = 0;

    for(let last = 0 ; last < arr.length ; last++){
        

          while (charSet.has(arr[last])) {
            charSet.delete(arr[first]);
            first++;
        }
        charSet.add(arr[last]);
        
        let currentLength = last-first+1;

        maxLength = Math.max(maxLength,currentLength);
    }

    return maxLength;

    }
}
