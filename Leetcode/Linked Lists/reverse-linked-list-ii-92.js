//92. Reverse Linked List II
//Reverse a linked list from position m to n. Do it in one-pass.
//Note: 1 ≤ m ≤ n ≤ length of list.

//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

//function reverseBetween(head, start, stop) {
//  if (!head) { return null };
//  let dummyHead = new ListNode(0);
//  dummyHead.next = head;
//  let stack = [];
//  let p1 = dummyHead;
//  
//  for (let i = 0; i < start - 1; i++) {
//    p1 = p1.next;
//  }
//
//  let p2 = p1.next; // this moves it on to the start
//  
//  for (let i = start; i < stop; i++) {
//    stack.push(p2);
//    p2 = p2.next;
//  }
//
//  stack.push(p2); // we want to push one last time
//  let connector; 
//  if (p2.next !== null) { // sometimes stop is already at the end
//    connector = p2.next; // after stop, 5 in example case  
//  }
//
//  if (start === 1) {
//    head = stack.pop();
//    let tempHead = head;
//    while (stack.length > 0) {
//      let currentNode = stack.pop(); // 4 
//      tempHead.next = currentNode; //4
//      let temp = tempHead.next;
//      tempHead = temp;
//      tempHead.next = null;
//    }
//    connector !== undefined ? tempHead.next = connector : connector;
//    return head;
//  } else { 
//    while (stack.length > 0) {
//      let currentNode = stack.pop(); // 4 
//      p1.next = currentNode; //4
//      let temp = p1.next;
//      p1 = temp;
//      p1.next = null;
//    }
//    
//    connector !== undefined ? p1.next = connector : connector;
//    return head;
//  }
//}

function reverse(node) {
  let tail = node;
  let head;
  let prev = null
  let current = node;

  while (current) {
    let temp = current.next;
    current.next = prev; // on the first pass this creates the end of the list (null)
    prev = current;
    current = temp;
  }

  head = prev;

  return {head: head, tail: tail};
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

function reverseBetween(head, start, stop) {
  if (!head) { return null }
  if (!head.next) { return head }
  let dummy = new ListNode(0);
  dummy.next = head;

  let beginning = dummy; 
  let outsideLeft = dummy;
  let outsideRight;
  let reversedList


  for (let i = 1; i < start; i++) {
    outsideLeft = outsideLeft.next;
  }

  let cutter = outsideLeft.next; // this will be on start
  let newHead = cutter; // this is to keep reference to the head of the cut node
  outsideLeft.next = null;  // severing, the tie with the node about to be reversed
  
  for (let i = start; i < stop; i++) {
    cutter = cutter.next;
  }

  outsideRight = cutter.next; // this is saved to stitch the reversed segment to the end
  cutter.next = null;
  reversedList = reverse(newHead);
  let insideHead = reversedList.head;
  let insideTail = reversedList.tail;


  if (start === 1 && outsideRight) {
    insideTail.next = outsideRight;
    return insideHead;
  }
  else if (start === 1 && !outsideRight) {
    return insideHead;
  } else {
    outsideLeft.next = insideHead;
    insideTail.next = outsideRight;
    return beginning.next;
  }
}


let list = generateList(1, 5);
console.log(reverseBetween(list, 2, 4));
let list2 = generateList(1, 2);
console.log(reverseBetween(list2, 1, 2));
let list3 = generateList(1, 3);
console.log(reverseBetween(list3, 1, 2)); // 213
//traverseList(list);
//console.log(revers(list));


// traverse to the start arg
// at start arg (m)
// initialize p1 and p2
// p2 loops the following
//  adds current node to stack 
//  moves to next node
//  stops when it reaches stop (n) (make sure to add this to stack) 
// now loop
// current var = stack item gets popped off 

//Input: 1->2->3->4->5->NULL, m = 2, n = 4
//Output: 1->4->3->2->5->NULL

//let head = new ListNode(1);
//head.next = new ListNode(2);
//head.next.next = new ListNode(3);
//head.next.next.next = new ListNode(4);
//reverse(head, 2, 4);
//
//let head2 = new ListNode(3);
//head2.next = new ListNode(5);
//reverse(head2, 1, 2);
//
//console.log('\n');
//console.log('-------------------------------');
//
//let head3 = new ListNode(1);
//head3.next = new ListNode(2);
//head3.next.next = new ListNode(3);
//reverse(head3, 1, 2); // 213
//// 5, 3