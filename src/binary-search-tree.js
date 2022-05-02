const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
      constructor(data) {
          this.data = data;
          this.left = null;
          this.right = null;
      }
}

class BinarySearchTree {
  constructor() {
      this.RootA = null;
  }

  root() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      return this.RootA;
  }

  add(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      this.RootA = add(this.RootA, data);

      function add(node, data) {
          if (!node) {
              return new Node(data);
          }

          if (node.data === data) {
              return node;
          }

          if (data < node.data) {
              node.left = add(node.left, data);
          } else {
              node.right = add(node.right, data);
          }

          return node;
      }


  }

  has(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      return search(this.RootA, data);

      function search(node, data) {
          if (!node) {
              return false;
          }
          if (node.data === data) {
              return true;
          }
          return data < node.data ?
              search(node.left, data) :
              search(node.right, data);
      }
  }

  find(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (!this.RootA) return null

      let current = this.RootA
      let found = false
      while (current && !found) {
          if (data < current.data) {
              current = current.left
          } else if (data > current.data) {
              current = current.right
          } else {
              found = current
          }
      }
      if (!found) return null;
      return found
  }

  remove(data) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      this.RootA = remove(this.RootA, data);

      function remove(node, data) {
          if (!node) {
              return null;
          }
          if (data < node.data) {
              node.left = remove(node.left, data);
              return node;
          } else if (node.data < data) {
              node.right = remove(node.right, data);
              return node;
          } else {
              if (!node.left && !node.right) {
                  return null;
              }
              if (!node.left) {
                  node = node.right;
                  return node;
              }
              if (!node.right) {
                  node = node.left;
                  return node;
              }
              let minFromRight = node.right;
              while (minFromRight.left) {
                  minFromRight = minFromRight.left;
              }
              node.data = minFromRight.data;
              node.right = remove(node.right, minFromRight.data);
              return node;
          }
      }
  }

  min() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (!this.RootA) {
          return;
      }

      let node = this.RootA;
      while (node.left) {
          node = node.left;
      }

      return node.data;
  }

  max() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (!this.RootA) {
          return;
      }

      let node = this.RootA;
      while (node.right) {
          node = node.right;
      }

      return node.data;
  }
}

module.exports = {
  BinarySearchTree
};