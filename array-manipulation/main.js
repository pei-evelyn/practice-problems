function head(arr) {
  // given an array, return first element of array
  // cannot use slice, splice, pop, shift

  // can use the index to return arr[0] which is the first element

  return arr[0];
}

function last(arr) {
  //given array, returns last element
  // use the length property to get the total number then use the index to return arr[arr.length - 1]
  return arr[arr.length - 1];
}


function tail(arr) {
  //returns new array containing all elements of array after first

  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

function initial(arr) {
  // return new arr containing all elements in array except last
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i])
  }
  return newArr;
}

function reverse(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}
