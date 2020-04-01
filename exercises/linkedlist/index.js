// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    // this.length++;
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;
    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (this.head) {
    //   this.head = this.head.next;
    // }
    return this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) return;
    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }
    //
    // let prev = this.head;
    // let node = this.head.next;
    // while (node.next) {
    //   prev = prev.next;
    //   node = node.next;
    // }
    // prev.next = null;
    return this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    if (this.getLast()) {
      this.getLast().next = new Node(data);
    } else {
      this.head = new Node(data);
    }
    // return this.insertAt(data, this.size() - 1);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

}

module.exports = { Node, LinkedList };
