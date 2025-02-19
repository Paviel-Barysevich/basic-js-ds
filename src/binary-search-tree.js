const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addDataToTree(this.rootNode, data);

    function addDataToTree(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = addDataToTree(node.right, data);
      } else {
        node.left = addDataToTree(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return searchDataInTree(this.rootNode, data);

    function searchDataInTree(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return (data < node.data) ? searchDataInTree(node.left, data) : searchDataInTree(node.right, data);
    }
  }

  find(data) {
    return findNodeInTree(this.rootNode, data);

    function findNodeInTree(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return (data < node.data) ? findNodeInTree(node.left, data) : findNodeInTree(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeNodeInTree(this.rootNode, data);

    function removeNodeInTree(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNodeInTree(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNodeInTree(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeftNode = node.left;
        while (maxFromLeftNode.right) {
          maxFromLeftNode = maxFromLeftNode.right;
        }

        node.data = maxFromLeftNode.data;

        node.left = removeNodeInTree(node.left, maxFromLeftNode.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    return findNodeWithMinData(this.rootNode);

    function findNodeWithMinData(node) {
      let nodeWithMinData = node;

      while (nodeWithMinData.left) {
        nodeWithMinData = nodeWithMinData.left;
      }

      return nodeWithMinData.data;
    }
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    return findNodeWithMaxData(this.rootNode);

    function findNodeWithMaxData(node) {
      let nodeWithMaxData = node;

      while (nodeWithMaxData.right) {
        nodeWithMaxData = nodeWithMaxData.right;
      }

      return nodeWithMaxData.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};