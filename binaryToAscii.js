// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
// https://www.codewars.com/kata/5583d268479559400d000064/javascript

const binaryToString = (binary) => {
  let result = "";
  const arr = binary.match(/.{1,8}/g);

  for (let i = 0; i < arr.length; i++) {
    result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
  }
  return result;
};

binaryToString("01100001"); // "a"
