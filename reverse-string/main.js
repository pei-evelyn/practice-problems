function reverseStr(str) {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    const letterArr = strArr[i].split('');
    const reversed = letterArr.reverse();
    strArr[i] = reversed.join('');
  }
  const reversedString = strArr.join(' ');
  return reversedString;
}

// given a string, return the string in reverse order with spaces included

// first separate string by word using str.split(" ") - gives me an array
// going to loop through array, initiallization i = 0, conndition i < array.length, increment i
// for each word, going to create a new variable.
// we're going to use the reverse method on that item in the array and set it equal to this new variable
// going to set the item at that index in the array to equal this new variable
// each word is reversed at this point
// going to join the array, using join method(' ') and save to variable
// return this variable
