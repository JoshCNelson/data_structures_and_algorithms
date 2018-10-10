var isPalindrome = function(head) {
  let fast = head;
  let slow = head;
  let stack = [];

  while (fast && fast.next) {
    fast = fast.next.next;
    stack.push(slow);
    slow = slow.next;
  }
  
  while (stack.length > 0) {
    let currentNode = stack.pop();
    if (currentNode.val !== slow.val) { return false }
    slow = slow.next;
  }

  return slow.next === null;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateNodes(...nodes) {
  let head = new ListNode(nodes.shift());
  let current = head
  for (let i = 0; i <= nodes.length - 1; i++) {
    current.next = new ListNode(nodes[i]);
    current = current.next;
  }

  return head;
}
let list = generateNodes(1, 2)
console.log(isPalindrome(list))