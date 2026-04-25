class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();

  nums.forEach(element => {
    freqMap.set(element, (freqMap.get(element) ? freqMap.get(element) + 1 : 1 ) )
  });

  let sorted = Array.from(freqMap).sort( (a,b)=> b[1] - a[1] );
  const finalArray = sorted.map( (pair)=> pair[0] );

  return(finalArray.slice(0,k));
    }
}
