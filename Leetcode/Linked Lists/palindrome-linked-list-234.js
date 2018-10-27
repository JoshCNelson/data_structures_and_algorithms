var isPalindrome = function(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return palindrome(result);
};

function palindrome(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let startVal = array[start];
    let endVal = array[end];

    if (startVal !== endVal) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}





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
let list = generateNodes(-129, -129)
console.log(isPalindrome(list))