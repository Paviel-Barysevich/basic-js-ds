const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    const { length } = this.stack;

    this.stack[length] = value;

    return this;
  }

  pop() {
    const top = this.peek();

    if (this.stack.length) {
      this.stack.length = this.stack.length - 1;
    }

    return top;
  }

  peek() {
    const { length } = this.stack;
    const top = this.stack[length - 1];

    return top;
  }
}

module.exports = {
  Stack,
};
