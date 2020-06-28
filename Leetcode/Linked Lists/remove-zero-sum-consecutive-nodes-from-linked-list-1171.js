// Leetcode #1171: Remove Zero Sum Consecutive Nodes From Linked List

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

// Mental Model: Map with a Prefix Sum
// Data structure => map[prefixSum]ListNode

// We can solve this by using a prefix sum to essentially
// keep a running total of consecutive numbers. The prefix
// sum will be the key while the list nodes will be the value
// Once we run into a key collision we know that we have run into
// a 0 sum and we can remove the nodes from the original key entry
// to the next value past the second attempted entry

var removeZeroSumSublists = function (head) {
  if (!head) { return null }

  const dummy = new ListNode(0);
  dummy.next = head;
  const map = { 0: dummy };
  let prefixSum = 0;

  while (head) {
    prefixSum += head.val;

    if (map[prefixSum]) {
      let node = map[prefixSum];
      let sum = prefixSum;
      node = node.next;

      // We want to remove all the nodes and
      // associated references in the map
      // from node to head (including head)
      while (node !== head) {
        sum += node.val;
        delete map[sum];
        node = node.next;
      }

      map[prefixSum].next = head.next;
    } else {
      map[prefixSum] = head;
    }

    head = head.next;
  }

  return dummy.next;
};