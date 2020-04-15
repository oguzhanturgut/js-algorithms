// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let turtle = list.head;
  let rabbit = list.head;

  while (rabbit.next && rabbit.next.next) {
    rabbit = rabbit.next.next;
    turtle = turtle.next;
    if (rabbit === turtle) return true;
  }
  return false;
}

module.exports = circular;
