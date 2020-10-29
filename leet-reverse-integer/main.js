const reverse = x => {
  if (x === 0) {
    return x
  }

  let result = [];
  const arr = x.toString().split('')

  if (arr[0] === '-') {
    result.push(arr.shift())
  }
  const reverse = arr.reverse();
  result = result.concat(reverse)
  const num = parseInt(result.join(''))

  if (num >= 2147483647 || num <= -2147483648) {
    return 0;
  }

  return num;
}

// reverse an integer
// if negative number, remains negative
// order of integers is reversed
// ex. x = 123 => 321
// ex. x = -123 => -321
// if x = 0; return 0
// declar empty array to hold values
// turn x into string
// split the string
// iterate through array with a loop
// check if x[0] is -, if so, push into new arr
// if x[i] = 0, skip


// loop through the array

// variable to store sum

//arr[i] * i
