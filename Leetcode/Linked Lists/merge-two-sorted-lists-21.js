//21. Merge Two Sorted Lists
//Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.


function merge(list1, list2) {
  let dummy = new ListNode(0);
  let p = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      p.next = list1;
      list1 = list1.next;
    } else {
      p.next = list2;
      list2 = list2.next;
    }
    p = p.next;
  }

  if (list1 !== null) {
    p.next = list1;
  }
  if (list2 !== null) {
    p.next = list2;
  }

  return dummy.next;
}
