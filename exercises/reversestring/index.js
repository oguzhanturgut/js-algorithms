// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reduce((a, c) => c + a, '');
}
module.exports = reverse;

// Solution 1
// function reverse(str) {
//   return [...str].reverse().join('');
// }

// Solution 2
// function reverse(str) {
//   let res = '';
//   for (let i = 0; i < str.length; i++) {
//     res = str[i] + res;
//   }
//   return res;
// }

// Solution 3
// function reverse(str) {
//   let res = '';
//   for (let char of str) {
//     res = char + res;
//   }
//   return res;
// }
