function solve(nums) {
  const numbers = new Map();

  nums.forEach((num) => {
    if (numbers.has(num)) {
      let val = numbers.get(num);
      val++;
      numbers.set(num, val);
    } else {
      numbers.set(num, 1);
    }
  });

  let occurence = parseInt(nums.length / 3);
  let output = [];

  for (const [key, value] of numbers) {
    if (value > occurence) {
      output.push(key);
    }
  }

  return output;
}

let nums = [3, 2, 3];
console.log(solve(nums));
