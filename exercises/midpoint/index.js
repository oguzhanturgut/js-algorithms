// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let turtle = list.head;
  let rabbit = list.head;
  while (rabbit.next && rabbit.next.next) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;
  }

  return turtle;
}

module.exports = midpoint;
