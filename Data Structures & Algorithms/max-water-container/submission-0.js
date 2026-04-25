class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = 0.0;
        for(let i = 0 ; i < heights.length ; i++){
        for(let j = i+1 ; j < heights.length ; j++){
            let CurrentWidth = j - i;
            let CurrentHeight = heights[i] < heights[j] ? heights[i] :  heights[j] ;

            let currentArea = CurrentWidth * CurrentHeight;

            if(currentArea > area){
                area = currentArea;
            }
        }

    }
    return area
    }
}
