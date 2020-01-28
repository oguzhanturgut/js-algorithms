// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return [...str]
    .map((char, index, arr) => {
      if (arr[index - 1] === ' ' || index === 0) return char.toUpperCase();
      return char;
    })
    .join('');
}

module.exports = capitalize;

// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(e => {
//       let [first, ...rest] = e;
//       return first.toUpperCase() + rest.join('');
//     })
//     .join(' ');
// }
