//141. Linked List Cycle
//Given a linked list, determine if it has a cycle in it.

function cycleCheck(head) {
  if (!head) { return false }
  let fast = head;
  let slow = head;

  while (true) { 
    if (fast.next === null || fast.next.next === null) {
      return false;
    }

    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
}