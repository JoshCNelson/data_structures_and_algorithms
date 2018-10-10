//206. Reverse Linked List
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverse(head) {
  if (head === null) {
    return null;
  }

  let prev;
  let current = head;

  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}
// mental model - reference writer reference
// the outside pointers are used for referencing 
// the previous and next nodes so that current "the writer"
// can focus on just reversing the links to previous' node

// we use a 3 pointer slide 
// as we traverse the list we set the curr.next to prev
// thus reversing the diretion of the LL