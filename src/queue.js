const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.top = null;
    this.tail = null;
    this.topElem = undefined;
    this.value = null;
    this.next = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    const node = {
      value: value,
      next: null,
    };

    if (!this.top) {
      this.top = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.top) return 1;

    this.topElem = this.top.value;
    this.top = this.top.next;

    if (!this.top) this.tail = null;

    return this.topElem;
  }
}

module.exports = {
  Queue
};
