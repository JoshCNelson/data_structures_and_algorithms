# Mental Models

### Fast, Slow pointers
Works well for:
- Determining whether a linked list is a cycle

How it works:
- You have two pointers, fast and slow
  - Start fast and slow at the first node
  - Move the slow pointer at one node per iteration of the loop and the fast pointer two nodes
  - Continue doing this until:
    - If the nodes are the same then you know you have a cycle because fast has looped around and caught up to slow
    - If fast finds a terminating node, you know that it is not a cycle

```javascript
function cycleCheck(head) {
  if (!head) { return false }
  let fast = head;
  let slow = head;

  // we loop until we hit one of the terminating conditions
  // 1) fast equals slow, we have a cycle
  // 2) fast finds a terminating node, not a cycle
  while (fast.next !== null || fast.next.next == null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false
}
```

### Reference writer reference (3 pointer inch worm)
Works well for:
- Problems where you need to maintain references to prev / next nodes (Reversing a link list)
- This gets its name from the fact the prev & temp pointers help us keep anchor points while the job of the current pointer is to write our actual changes

How it works:
- 3 pointers: previous, current, temp (next)
  - current starts at the head
  - set temp to current's next node (think of it as setting an achor it will pull to later) 
  - now that we have an anchor point in temp, set current's next to previous' node, we are starting the reversing process
  - set the prev pointer = current
    - now that current.next is pointed to the prev node we can start to move along the LL
  - set current = temp, we are now going to use the anchor we set at the beginning to help us continue traversing the LL
  - continue this loop until our Current node is not null (when it reaches null we have reaced the termination point of the LL)
  - Return prev as it is now the head of the reversed LL

```javascript
function reverseList(head) {
  if (!head) {return null}

  let prev;
  let current = head;

  while (head !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}
```