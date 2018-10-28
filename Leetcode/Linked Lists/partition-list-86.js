var partition = function(head, x) {
  if (!head) { return head }
  
  const lesserListDummy = new ListNode(0);
  const greaterListDummy = new ListNode(0);
  let lesserList = lesserListDummy;
  let greaterList = greaterListDummy;
  
  while (head) {
    
    if(head.val < x) {
      lesserList.next = head;
      lesserList = head;
    } else {
      greaterList.next = head;
      greaterList = head;
    }
    
    head = head.next;
  }

  greaterList.next = null;
  lesserList.next = greaterListDummy.next;
  return lesserListDummy.next;
};