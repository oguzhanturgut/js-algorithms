// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const char = '#';
  const space = ' ';
  const makeRow = (x, y) =>
    space.repeat((y - (2 * x - 1)) / 2) +
    char.repeat(2 * x - 1) +
    space.repeat((y - (2 * x - 1)) / 2);
  for (let i = 1; i < n + 1; i++) {
    console.log(makeRow(i, 2 * n - 1));
  }
}

module.exports = pyramid;
