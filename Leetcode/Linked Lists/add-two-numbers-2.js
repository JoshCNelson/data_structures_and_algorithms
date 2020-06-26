// Leetcode #2: Add Two Numbers

// Mental Model: Head to Tail Recursion
// Recursively build the result node
// from the head of the list to the tail.
// Because we need to return the whole list
// we need a helper function to actually
// do the building and our main function
// can just keep a reference to the head

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(null);
  addNodes(l1, l2, dummy, 0);
  return dummy.next;
};

const addNodes = (l1, l2, result, carry) => {
  if (!l1 && !l2) {
    if (carry === 0) { return; }

    result.next = new ListNode(carry);
    return;
  }

  if (!l1) {
    const nodeVal = l2.val + carry;
    result.next = new ListNode(nodeVal % 10);
    return addNodes(null, l2.next, result.next, Math.floor(nodeVal / 10));
  }

  if (!l2) {
    const nodeVal = l1.val + carry;
    result.next = new ListNode(nodeVal % 10);
    return addNodes(l1.next, null, result.next, Math.floor(nodeVal / 10));
  }

  const nodeVal = l1.val + l2.val + carry;
  result.next = new ListNode(nodeVal % 10);
  addNodes(l1.next, l2.next, result.next, Math.floor(nodeVal / 10));
};
