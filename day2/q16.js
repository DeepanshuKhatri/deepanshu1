function solve(nums){
    let sorted = new Array(nums.length);
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        sorted[i] = nums[i];
    }
    nums.sort();
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != sorted[i]){
            count++;
        }
    }
    return count;
}

let  heights = [5,1,2,3,4]

console.log(solve(heights))