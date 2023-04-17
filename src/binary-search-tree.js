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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const node = new Node(data);

    if (!this.rootNode) {
      this.rootNode = node;
    } else {
      addNode(this.rootNode, node);
    }

    function addNode(parentNode, node) {
      if (node.data < parentNode.data) {
        if (!parentNode.left) {
          parentNode.left = node;
        } else {
          addNode(parentNode.left, node);
        }

      } else {
        if (!parentNode.right) {
          parentNode.right = node;
        } else {
          addNode(parentNode.right, node);
        }
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return (this.find(data) !== null) ? true : false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node = this.rootNode;

    while (node) {
      if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;

      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;

      } else {
        if (!node.left && !node.right) {
          return null;

        } else if (!node.left) {
          return node.right;

        } else if (!node.right) {
          return node.left;

        } else {
          let min = node.right;

          while (min.left) {
            min = min.left;
          }

          node.data = min.data;
          node.right = removeNode(node.right, min.data);
          return node;
        }
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) return null;

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) return null;

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};