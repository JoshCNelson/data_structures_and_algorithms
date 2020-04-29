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

### Offset pointers (variation of a Leader/Follower)

Problem Example
- Leetcode: ?
- CTCI Linked Lists 2.2: Find the kth to last node

Works well for:
- When we know what node we want relative to some point we don't know (e.g. we 2nd to last node but don't know the actual length of the list)

How it works:
- 2 pointers: Offset (or leader) and result (follower)
- Both pointers start on the head
- The leader will move forward however many nodes we need to offset by (if we want to find the 2nd to last node we need to advance it by 2 nodes)
  - Note that we need to make sure as we advance the node that the offset it not greater then the length of the list (e.g. offset by 3 but the list is only length 2)
- Once the leader is in position advance both pointers together at the same interval. Once the leader reaches the termination point (it equals null) then you know that the result (or follower) will be where we want it to be (in this case the kth to last element)
```javascript
// find the 2nd to last node
// O = offset
// R = result
// Start them at head
O
R
1 -> 2 -> 3 -> 4 -> null

// advance result by 2
R
          O
1 -> 2 -> 3 -> 4 -> null

// now advance them at the same rate
     R
               O
1 -> 2 -> 3 -> 4 -> null

// Now that the offset has reached the termination point
// we know that we can return the node that R is at.
// It is the kth to last element
          R
                     O
1 -> 2 -> 3 -> 4 -> null
```

### Copy and Replace (middle node deletion)
Problem Example
- Leetcode #237 - Delete Node in a Linked List
- CTCI Linked Lists 2.3: Delete Middle Node

Works well for:
- When we are given a node that is not the head of the list and we need to remove it

How it works:
- With the node you are given, set it to equal the next node
- Now set the pointer for your current node to point to the node AFTER the next node

```javascript
// Assume we have the current LL and we are given node 2
     P
1 -> 2 -> 3 -> 4 -> null

// Copy the node's next node
     P
1 -> 3 -> 3 -> 4 -> null

// Set the next pointer to point to the node AFTER the one we just copied
     P
1 -> 3 -> 4 -> null
```