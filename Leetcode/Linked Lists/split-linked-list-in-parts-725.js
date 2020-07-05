// Leetcode #725: Split Linked list in Parts

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */

var splitListToParts = function (head, k) {
  const result = [];
  let dividend = getListLength(head)
  let divisor = k
  let headOfNextNodeList = head

  while (divisor > 0) {
    let nodesThisIteration = Math.ceil(dividend / divisor);
    dividend -= nodesThisIteration;
    divisor--;

    if (nodesThisIteration === 0) {
      result.push(null)
    } else {
      let headOfCurrentList = headOfNextNodeList;
      let currentHeadToReturn = headOfNextNodeList;
      let currentHeadToTraverse = headOfNextNodeList

      // we do one less iteration then we might otherwise do
      // so that we can set the final node's next to null
      for (let i = 0; i < nodesThisIteration - 1; i++) {
        currentHeadToTraverse = currentHeadToTraverse.next;
      }

      // copy the bide we are currently on and set its next as the
      // so we can maintain a reference to the list for the next
      // round of node splitting
      headOfNextNodeList = new ListNode(currentHeadToTraverse.val || null);
      headOfNextNodeList.next = currentHeadToTraverse.next || null;
      headOfNextNodeList = headOfNextNodeList.next;

      // trim the end of the list
      currentHeadToTraverse.next = null;

      result.push(currentHeadToReturn);
    }
  }

  return result;
};

const getListLength = (head) => {
  let count = 0;

  while (head) {
    count++;
    head = head.next;
  }

  return count;
}