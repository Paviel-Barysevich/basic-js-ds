const { NotImplementedError } = require('../lib/errors');
//const { ListNode } = require('../extensions/list-node.js');

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
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) {
      this.queue = {
        value,
        next: null
      };

      return;
    }

    const node = {
      value,
      next: null
    };
    const lastNode = this.findLastNode(this.queue);

    lastNode.next = node;
  }

  dequeue() {
    if (this.queue === null) {
      return;
    }

    const top = this.queue.value;

    if (this.queue.next) {
      this.queue.value = this.queue.next.value;
      this.queue.next = this.queue.next.next;
    } else {
      this.queue = null;
    }

    return top;
  }

  findLastNode(list) {
    let lastNode = list;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    return lastNode;
  }
}

module.exports = {
  Queue
};
