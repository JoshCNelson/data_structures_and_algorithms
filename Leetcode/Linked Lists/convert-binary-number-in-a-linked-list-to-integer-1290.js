// * @param { ListNode } head
// * @return { number }
var getDecimalValue = function (head, acc = [0]) {
  if (!head) { return parseInt(acc.join(''), 2) }
  return getDecimalValue(head.next, [...acc, head.val])
};

// Ideally instead of passing the array we would instead
// pass along an accumulated value which would be
// acc * 10 + head.val but for some reason I was getting
// small off by 2 errors. An array works well enough in this
// instance although it is less memory efficient