// Leetcode: #445

// Solution: use stack to track the values of the lists
// time complexity: O(N)
// space complexity: O(N)

var addTwoNumbers = function (l1, l2) {
  // store the values from both lists in their own stack
  const stack1 = getListValues(l1);
  const stack2 = getListValues(l2);
  let carryOver = 0;

  let head = new ListNode();
  const headRef = head;

  // build our new list with teh values we stored in the stack
  while (stack1.length || stack2.length || carryOver > 0) {
    let stack1Value = stack1.pop() || 0;
    let stack2Value = stack2.pop() || 0;
    let currentValue = stack1Value + stack2Value + carryOver;

    carryOver = 0;

    if (currentValue > 9) {
      carryOver = Math.floor(currentValue / 10);
      currentValue -= carryOver * 10;
    }

    head.val = currentValue

    if (stack1.length || stack2.length || carryOver > 0) {
      head.next = new ListNode();
      head = head.next;
    }
  }

  // now we reverse the list and return the head upon completion
  let prev;
  let current = headRef;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
};

const getListValues = (head, result = []) => {
  if (!head) { return result }

  result.push(head.val)
  return getListValues(head.next, result)
}