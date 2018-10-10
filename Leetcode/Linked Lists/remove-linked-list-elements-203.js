//203. Remove Linked List Elements 
//Remove all elements from a linked list of integers that have value val.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeElements(head, target) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let previous = dummyHead;
  let current = dummyHead.next;

  while (current !== null) {
    if (current.val === target) {
      previous.next = current.next;
    } else {
      previous = current;
    }
    current = current.next;
  }

  return dummyHead.next;
}

