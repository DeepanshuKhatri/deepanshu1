function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2 || num == 3) return num;
  if (num % 2 === 0) return false;
  if (num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i++) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
function NPrimes(startAt, N) {
  let count = 0;
  let num = startAt;
  while (count != N) {
    if (isPrime(num)) {
      console.log(num);
      count++;
    }
    num++;
  }
}

NPrimes(6, 100);
