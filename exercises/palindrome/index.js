// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return [...str].every((e, i, arr) => e === arr[arr.length - i - 1]);
}

// Solution 2
// function palindrome(str) {
//   return [...str].every((e, i, arr) => e === arr[arr.length - i - 1]);
// }

// Solution 1
// function palindrome(str) {
//   return str === [...str].reduce((a, c) => c + a, '');
// }

module.exports = palindrome;
