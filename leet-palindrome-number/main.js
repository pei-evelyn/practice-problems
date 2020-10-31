const isPalindrome = x => {
  if (x === 0) {
    return true
  }
  const copy = x;
  let y;
  while (x !== 0) {
    let num = x % 10;
    if (num < 0) {
        num *= -1
    }
    if (y === undefined) {
      y = num;
    } else {
      y = y * 10 + num
    }
    x = Math.trunc(x / 10)
  }
  return copy === y
}

// solve without turning num into str
// ex: x = 121 => true
// x = -121 => false
// create variable to reverseNum
// modulo % 10
//-121 % 10 = 1
// y += 1
// -12
// if y !== undefined,
// y = y * 10 + num
// x = Math.trunc(x / 10)
// return x === y
