// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Recursive with memoization
const memo = fn => {
  const store = {};
  return n => {
    if (store[n]) return store[n];
    store[n] = fn(n);
    return store[n];
  };
};

const recursiveFib = n => {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

const fib = memo(recursiveFib);


// const fib = n => {
//   const arr = [0,1];
//   for (let i = 1; i < n+1; i++) {
//     arr[i + 1] = arr[i - 1] + arr[i];
//   }
//   return arr[n];
// };

module.exports = fib;
