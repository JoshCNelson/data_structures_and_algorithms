//83. Remove Duplicates from Sorted 
//Given a sorted linked list, delete all duplicates such that each element appear only once.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeDuplicates(head) {
  if (head === null) {
    return null;
  }

  let writer = head;
  let reader = head.next;

  while (reader !== null) {
    while (reader && reader.val === writer.val) {
      reader = reader.next;
    }
    
    writer.next = reader;
    writer = reader;
  }
  return head;
}
//mental model == ???

traverseList(removeDuplicates(head));