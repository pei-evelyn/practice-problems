// given number n, return value of n index

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n];
}

function fibnacci(n) {
  if (n < 2) {
    return n
  }
  return fibnacci(n - 1) + fibnacci(n - 2)
}
