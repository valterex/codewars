// provided argument must be an array
const isArrayValid = (arr) => {
  return Array.isArray(arr);
};

// isArrValid([]) // true
// isArrValid(null) // false
// isArrValid(0) // false

// array elements are numbers or floats
const isArrayNumeric = (arr) => {
  return isArrayValid(arr) ? !arr.some((i) => !Number.isInteger(i)) : false;
};

// isArrNumeric([0, 1, 2.0]); // true
// isArrNumeric([0, 1, 'test']); // false
// isArrNumeric([0, 1, 2.3]); // false

const isArrInt1 = (arr) => {
  return isArrayNumeric(arr) && isArrayValid(arr) ? true : false;
};

// isArrInt1([3, 4, 2.0]) // true
// isArrInt1([3, 4, 2.9]) // false
// isArrInt1([3, 4, "huh"]) // false
// isArrInt1([]) // true
// isArrInt1([-11, 10, -5]) // true

// Simplified
const isArrInt2 = (arr) => {
  return (
    Array.isArray(arr) &&
    arr.every((x) => {
      return Math.floor(x) === x;
    })
  );
};
