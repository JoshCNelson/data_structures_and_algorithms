// Leetcode #148: Sort List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) { return head; }

  let temp = head;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  temp.next = null;

  return merge(sortList(head), sortList(slow));
};

const merge = (a, b) => {
  let sorted = new ListNode(0);
  let current = sorted;

  while (a !== null && b !== null) {
    if (b.val < a.val) {
      current.next = b;
      b = b.next;
    } else {
      current.next = a;
      a = a.next;
    }

    current = current.next;
  }

  while (a !== null) {
    current.next = a;
    a = a.next;
    current = current.next;
  }

  while (b !== null) {
    current.next = b;
    b = b.next;
    current = current.next;
  }

  return sorted.next;
}
