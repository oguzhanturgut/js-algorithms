// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const res = [...String(n)].reduce((a, c) => c + a, '');
  return parseInt(res) * Math.sign(n);
}

// function reverseInt(n) {
//   const res = [...String(n)].reduce((a, c) => c + a, '');
//   return n >= 0 ? parseInt(res) : parseInt(res) * -1;
// }

module.exports = reverseInt;
