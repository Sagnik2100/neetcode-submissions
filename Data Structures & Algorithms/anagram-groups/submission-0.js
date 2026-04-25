class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let myMap = new Map();

        for(let element of strs){
            let key = element.split("").sort().join("");

            if(!myMap.has(key)){
                myMap.set(key,[]);
            }

            myMap.get(key).push(element)
        }

        return Array.from(myMap.values())
    }
}
