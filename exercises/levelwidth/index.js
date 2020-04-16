// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const counters = [0];
  const queue = [root, null];

  while (queue.length > 1) {
    const nextNode = queue.shift();
    if (nextNode === null) {
      counters.push(0);
      queue.push(null);
    } else {
      queue.push(...nextNode.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;

}

module.exports = levelWidth;
