//Given a linked list, remove the n-th node from the end of list and return its head.
//
//Example:
//
//Given linked list: 1->2->3->4->5, and n = 2.
//
//After removing the second node from the end, the linked list becomes 1->2->3->5.
//Note:
//
//Given n will always be valid.
//
//Follow up:
//
//Could you do this in one pass?


function removeNth(head, nth) {
  if (!head) { return null }
  if (!head.next) { return null }

  let dummy = new ListNode(0);
  dummy.next = head;

  let leading = dummy;
  let trailing = dummy;

  for (let i = 0; i < nth; i++) {
    if (leading.next) {
      leading = leading.next;
    }
  }
  
  while (leading.next !== null) {
    leading = leading.next;
    trailing = trailing.next;
  }

  if (trailing.next !== null) {
    trailing.next = trailing.next.next;
    trailing = trailing.next;
  } else {
    trailing.next = leading;
  }

  return dummy.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateList(start, stop) {
  let head = new ListNode(start);
  let current = head
  for (let i = start + 1; i <= stop; i++) {
    current.next = new ListNode(i);
    current = current.next;
  }

  return head;
}

function traverseList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  return;
}

list = generateList(1, 5);
list2 = generateList(1, 2);  // 2
list3 = generateList(1, 1);  // 2

traverseList(removeNth(list, 2)); // 1, 2, 3, 5 => null
traverseList(removeNth(list2, 2)); // 1, 2, 3, 5 => null
traverseList(removeNth(list3, 1)); // 1, 2, 3, 5 => null
