// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
// https://www.codewars.com/kata/5583d268479559400d000064/javascript

const binaryToString = (binary) => {
  return binary.replace(/[01]{8}/g, (x) => {
    return String.fromCharCode(parseInt(x, 2));
  });
};

binaryToString("01100001"); // "a"
