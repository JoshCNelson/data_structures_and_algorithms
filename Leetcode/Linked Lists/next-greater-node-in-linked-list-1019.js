// Next Greater Node in LL #1019

var nextLargerNodes = function (head) {
  if (!head) { return [] }

  const arr = [];

  // iterate and create the stack
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const stack = [];
  const result = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      result[stack.pop()] = arr[i];
    }

    stack.push(i);
  }

  return result;
};