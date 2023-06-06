function reverse(num) {
  let start = 0,
    end = num.length - 1;
  while (start < end) {
    // let temp = num[start];
    // num[start] = num[end];
    // num[end] = temp;

    [num[start], num[end]] = [num[end], num[start]];
    start++;
    end--;
  }

  return num;
}
let num = [0, 1, 2, 3, 4];
console.log(reverse(num));
