// Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positive(numbers) {
  return numbers.filter((num) => {
    return num >= 0;
  });
}

let numbers = [2, 3, 78, -3, -1, 3, 5];
console.log(positive(numbers));
