// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strObj = [...str].reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});

  let max = 0;
  let res = '';
  for (let key in strObj) {
    if (strObj[key] > max) {
      max = strObj[key];
      res = key;
    }
  }
  return res;
}

module.exports = maxChar;
