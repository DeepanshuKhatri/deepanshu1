function solve(matrix) {
    if (matrix.length === 0) {
      return [];
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    let row = 0;
    let col = 0;
    let direction = 1;
  
    for (let i = 0; i < rows * cols; i++) {
      result.push(matrix[row][col]);
  
      row -= direction;
      col += direction;
  
      if (row >= rows) {
        row = rows - 1;
        col += 1;
        direction = -1 * direction;
      }
      if (col >= cols) {
        col = cols - 1;
        row += 2;
        direction = -1 * direction;
      }
      if (row < 0) {
        row = 0;
        direction = -1 * direction;
      }
      if (col < 0) {
        col = 0;
        direction = -1 * direction;
      }
    }
  
    return result;
  }
  
  
  let mat = [[1,2,3],[4,5,6],[7,8,9]]
  console.log(solve(mat))