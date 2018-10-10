var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) { return null }
  if (!intersection(headA, headB)) { return null }
  
  let headALength = getLength(headA);
  let headBLength = getLength(headB);
  
  if (headALength >= headBLength) {
    let offset = headALength - headBLength;

    while (offset > 0) {
      headA = headA.next;
      offset--;
    }
    
  } else {
    let offset = headBLength - headALength;
    
    while (offset > 0) {
      headB = headB.next;
      offset--;
    }
  } 

  while (headALength) {
    if (headA.val === headB.val) {
      return headA;
    } else {
      headA = headA.next;
      headB = headB.next;
      headALength--;
    }

  }
};

function intersection(node1, node2) {
  while(node1.next !== null) {
    node1 = node1.next;
  }
  
  while(node2.next !== null) {
    node2 = node2.next;
  }
  
  return node1.val === node2.val;
}


function getLength(node) {
  let length = 0;

  while (node) {
    node = node.next;
    length++;
  }

  return length;
}