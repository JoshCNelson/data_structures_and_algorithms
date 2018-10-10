//82. Remove Duplicates from Sorted List II
//Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function traverseList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  return ''
}

function removeDuplicates(head) {
  if (!head) { return null }

  let dummy = new ListNode(0);
  dummy.next = head;
  let leading = dummy;
  let trailing = dummy;
  while (leading.next) {
    while (leading.next && leading.val === trailing.val) {
      
      leading = leading.next;

      while (leading.next && leading.val === leading.next.val) {
        let temp = leading.next;
        while (temp.next && leading.val === temp.val) {
          temp = temp.next;
        }

        leading.next = temp;
        leading = temp;
      }  

      if (trailing.next !== leading.next) {
        trailing.next = leading;
        trailing = leading;
      }
    }
  }
  
  return dummy.next;
}


function removeDuplicates(head) {
  if (!head) { return null }
  let dummy = new ListNode(0);
  dummy.next = head;
  let leading = head;
  let trailing = dummy;
  
  while (leading !== null) {
    while (leading.next !== null && trailing.next.val === leading.next.val) {
      leading = leading.next;      
    }
   
    if (trailing.next === leading) {
      trailing = trailing.next;
    } else {
      trailing.next = leading.next;
    }
            
    leading = leading.next; 
  }

  return dummy.next;
}




  //let dummyHead = new ListNode(0)
  //dummyHead.next = head;
  //let current = head;
  //let prev = dummyHead;
  //
  //while (current !== null) {
  //  while (current.next !== null && current.val === current.next.val) {
  //    current = current.next;
  //
  //    if (current.next !== null && current.val !== current.next.val) {
  //      current = current.next
  //    }
  //  }
  //
  //  prev.next = current;
  //  prev = prev.next;
  //  current = current.next;
  //}
  //
  //return dummyHead.next;


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(5);

traverseList(removeDuplicates(head));
console.log('\n');
console.log('----------------');
console.log('\n');

let head2 = new ListNode(1);
head2.next = new ListNode(1);
head2.next.next = new ListNode(1);
head2.next.next.next = new ListNode(2);
head2.next.next.next.next = new ListNode(3);

traverseList(removeDuplicates(head2));

console.log('\n');
console.log('----------------');
console.log('\n');


let head3 = new ListNode(1);
head3.next = new ListNode(1);

traverseList(removeDuplicates(head3));

console.log('\n');
console.log('----------------');
console.log('\n');

let head4 = new ListNode(1);
head4.next = new ListNode(2);
head4.next.next = new ListNode(2);
traverseList(removeDuplicates(head4));