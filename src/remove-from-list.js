const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  class ListNode {
      constructor(some) {
          this.value = some;
          this.next = null;
      }
  }
  class LinkedList {
      constructor() {
          this.head = null;
          this.length = 0;
      }
      add(value) {
          if (this.length === 0) {
              this.head = new ListNode(value);
          } else {
              let current = this.head;
              // move to the last node
              while (current.next) {
                  current = current.next;
              }
              current.next = new ListNode(value);
          }
          this.length++;
      }
  }
  let myLinkedList = new LinkedList();
  let current = l;
  while (current) {
      if (current.value !== k) {
          myLinkedList.add(current.value);
      }
      current = current.next;
  }

  current = myLinkedList.head;
  while (current) {
      console.log(current.value);
      current = current.next;
  }

  return myLinkedList.head
}

module.exports = {
  removeKFromList
};
