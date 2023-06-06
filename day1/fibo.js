function fibo() {
  let num1 = 0,
    num2 = 1;
  console.log(num1);
  console.log(num2);
  for (let x = 2; x < 10; x++) {
    let next = num1+num2;
    console.log(next);
    num1 = num2;
    num2 = next;
  }
}

fibo();
