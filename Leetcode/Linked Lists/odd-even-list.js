Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL


1, 2, 3 => 1, 3, 2
1, 2, 3, 4 => 1, 3, 2, 4
no Head
1 => 1


  p =>  p =>  p => x

  1, 2, 3, 4, 5, 6
D
  1, 2, 3, 4, 5, 6
     x => x  => x

p => x => null

// guard clause that we have a head
// guard clause if we have just 1 node, return it

// start with odd pointer on the head
// start with the even pointer on head.next
  // while odd.next.next !== null|| even.next.next !== null 
    // odd.next => odd.next.next
      // odd = odd.next
    // evenHead for keeping track of even head
      // even.next => even.next.next
      // even = even.next
  // outside while loop odd.next => evenHead
    // even.next = null

    o => o
    1, 2, 3 => 1, 3, 2
       e

    o =>  o
    1, 2, 3, 4 => 1, 3, 2, 4
       e =>  e

function oddEven(head) {
  if (!head) { return null }
  if (!head.next) { return head }
  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (odd.next !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;

    even.next = even.next.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
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

let list = listgenerateList(1, 5);
let list2 = listgenerateList(1, 6);

oddEven(list);
oddEven(list2);




