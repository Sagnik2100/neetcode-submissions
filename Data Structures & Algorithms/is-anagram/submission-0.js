class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let fistInp = s.split('');
        let secondInp = t.split('');
        const firstArr = fistInp.sort().join('');
        const secondArr = secondInp.sort().join('');
        if(firstArr === secondArr){
            return true;
        }else{
            return false;
        }

    }
}
