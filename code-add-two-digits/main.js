function addTwoDigits(n) {
  let sum = 0;

  while (n) {
    const num = n % 10;
    sum += num;
    n = Math.trunc(n /10);
  }

  return sum;
}
