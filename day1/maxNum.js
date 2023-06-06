function maxNum(numbers) {
  let maxi = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    maxi = Math.max(maxi, numbers[i]);
  }
  return maxi;
}

let numbers = [4, 2, 1, -4, 98, 988, 998, 6];
console.log(maxNum(numbers));
