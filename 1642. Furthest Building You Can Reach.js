//not solved
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
 var furthestBuilding = function(heights, bricks, ladders) {
    for(let i = 0;i<heights.length;i++){
        if(heights[i]>=heights[i+1]){
            continue;
        }
        if(ladders>0){
            ladders--;
            continue;
        }
        else if(heights[i]+bricks>=heights[i+1]){
            bricks -= heights[i+1] - heights[i];
            continue;
        }else{
            return i;
        }
    }
    return heights.length-1
};

console.log(furthestBuilding([1,5,1,2,3,4,10000],4,1))

// [1,5,1,2,3,4,10000]
// 4
// 1