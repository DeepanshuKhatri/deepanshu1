function rotate(numbers) {
  let t = numbers[0],
    i = 0;
  for (i; i < numbers.length - 1; i++) {
    numbers[i] = numbers[i + 1];
  }
  numbers[i] = t;
  return numbers;
}

let numbers = [0, 1, 2, 3, 4];
let newArr = rotate(numbers);
console.log(newArr);
