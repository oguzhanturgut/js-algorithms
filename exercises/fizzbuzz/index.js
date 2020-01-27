// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  Array(n)
    .fill(1)
    .map((e, i) => e + i)
    .forEach(e => {
      console.log(e % 3 === 0 ? (e % 5 === 0 ? 'fizzbuzz' : 'fizz') : e % 5 === 0 ? 'buzz' : e);
    });
}

module.exports = fizzBuzz;
