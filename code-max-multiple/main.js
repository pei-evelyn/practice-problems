const maxMultiple = (divisor, bound) => {
  let n = 0;
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      n = i;
      break;
    }
  }
  return n;
}

console.log(maxMultiple(3, 10));
