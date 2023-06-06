function search(matrix, target){
    let row = matrix.length;
    let col = matrix[0].length;
    let start = 0, end = row*col-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let xrow = Math.floor((mid / col));
        let xcol = mid % col;
        if(matrix[xrow][xcol]=== target){
            return true;
        }
        else if(matrix[xrow][xcol] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return false;
}

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
console.log(search(matrix, target))