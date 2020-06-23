// Leetcode #24: Swap Nodes in Pairs

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

//  Recursive Swapping
//  Recursively swap the next pair. if we hit the end of the list
//  we just need to know whether to return the last node left or null
//  If it is a complete pair the we just need to make sure to point
//  the first nodes next to the recursed swap and then return b which
//  is now the head of the current recursed list

var swapPairs = function (head) {
  if (!head) { return null }
  if (!head.next) { return head }

  return swap(head, head.next)
};

const swap = (a, b) => {
  if (!a && !b) { return null }
  if (!b) { return a }

  const temp = b.next
  const nextTemp = temp && temp.next || null

  b.next = a
  a.next = swap(temp, nextTemp)
  return b
}