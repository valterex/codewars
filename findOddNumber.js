/**
 *
 * @desc www.codewars.com/kata/552c028c030765286c00007d/javascript
 * @param {string} numbers
 * @returns {number}
 */
const iqTest = (numbers) => {
  numbers = numbers.split(' ').map((el) => parseInt(el));

  const odd = numbers.filter((el) => el % 2 === 1);
  const even = numbers.filter((el) => el % 2 === 0);

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
};

iqTest('2, 3, 4');

// Test.assertEquals(iqTest('2 4 7 8 10'), 3);
// Test.assertEquals(iqTest('1 2 2'), 1);
