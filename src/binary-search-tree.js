const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.leave = {
      data: null,
      left: null,
      right: null
    };
    this.binaryTree = {};
  }

  root() {
    if (this.binaryTree.hasOwnProperty('data')) {
      return this.binaryTree;
    }

    return null
  }

  add(data) {
    const insertDataToNode = (data, node) => {
      if (data > node.data) {
        node.right = { ...this.leave };
        node.right.data = data;
      } else if (data < node.data) {
        node.left = { ...this.leave };
        node.left.data = data;
      }
    }

    if (!this.binaryTree.hasOwnProperty('data')) {
      this.binaryTree = { ...this.leave };
      this.binaryTree.data = data;

      return this;
    }

    if (data !== this.binaryTree.data) {
      const node = this.searchMatchingLeave(data, this.binaryTree);

      insertDataToNode(data, node);
    }

    return this;
  }

  find(data) {
    if (this.binaryTree.hasOwnProperty('data')) {
      const node = this.findNode(data, this.binaryTree);

      return node;
    }

    return null;
  }

  findNode(data, node) {
    if (data === node.data) {
      return node;
    } else if (data > node.data) {
      node = node.right ? this.findNode(data, node.right) : null;

      return node;
    }

    node = node.left ? this.findNode(data, node.left) : null;

    return node;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    const findParentNode = (data, tree, parent = null) => {
      if (tree.data === data) {
        return parent;
      }

      if (tree.data > data) {
        if (tree.left) {
          return findParentNode(data, tree.left, tree);
        }
      }

      if (tree.right) {
        return findParentNode(data, tree.right, tree);
      }

      return null;
    };

    if (this.has(data)) {
      const node = this.findNode(data, this.binaryTree);
      const parentNode = findParentNode(data, this.binaryTree, this.binaryTree);

      if (node.right === null && node.left === null) {
        if (parentNode.left === node) {
          parentNode.left = null;
          return this;
        }

        if (parentNode.right === node) {
          parentNode.right = null;
          return this;
        }

        return this;
      }

      if (node.right === null) {
        if (parentNode.left === node) {
          parentNode.left.data = node.left.data;
          parentNode.left.left = node.left.left;
          parentNode.left.right = node.left.right;
        }

        if (parentNode.right === node) {
          parentNode.right.data = node.left.data;
          parentNode.right.left = node.left.left;
          parentNode.right.right = node.left.right;
        }

        return this;
      }

      if (node.left === null) {
        if (parentNode.left === node) {
          parentNode.left.data = node.right.data;
          parentNode.left.left = node.right.left;
          parentNode.left.right = node.right.right;
        }

        if (parentNode.right === node) {
          parentNode.right.data = node.right.data;
          parentNode.right.left = node.right.left;
          parentNode.right.right = node.right.right;
        }

        return this;
      }

      let veryLeftNode = node.right;

      if (veryLeftNode) {
        while (veryLeftNode.left) {
          veryLeftNode = veryLeftNode.left;
        }
      }

      const veryLeftNodeData = veryLeftNode.data;

      this.remove(veryLeftNodeData);
      node.data = veryLeftNodeData;
    }

    return this;
  }

  min() {
    let leftNode = this.binaryTree.left;

    while (leftNode.left) {
      leftNode = leftNode.left;
    }

    return leftNode?.data;
  }

  max() {
    let rightNode = this.binaryTree.right;

    while (rightNode.right) {
      rightNode = rightNode.right;
    }

    return rightNode?.data;
  }

  searchMatchingLeave(data, node) {
    if (data > node.data) {
      node = node.right ? this.searchMatchingLeave(data, node.right) : node;

      return node;
    } else if (data < node.data) {
      node = node.left ? this.searchMatchingLeave(data, node.left) : node;

      return node;
    }
  }
}

module.exports = {
  BinarySearchTree
};