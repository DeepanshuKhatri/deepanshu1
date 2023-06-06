function absdiff(nums){
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = 0; j < nums.length; j++){
            sum =+ nums[j]-nums[i];
        }
        ans.push(sum);
    }
    return ans;
}

let nums = [2,3,5]

console.log(absdiff(nums));