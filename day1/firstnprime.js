function isPrime(num) {
  if (num == 2 || num == 3) return num;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i++) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

let count = 0;
let num = 2;
while (count != 100) {
  if (isPrime(num)) {
    console.log(num);
    count++;
  }
  num++;
}
