function search(matrix, target){
    let i = 0, j = matrix.length-1;
    while((i < matrix.length && j >0)){
        if(matrix[i][j]==target){
            return true;
        }
        else if (matrix[i][j] < target){
            i++;
        }else{
            j--;
        }
    }
    return false;
}

let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13

console.log(search(matrix, target))