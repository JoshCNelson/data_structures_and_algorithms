https://leetcode.com/problems/rotate-list/description/

edge cases:
- no Head
- 1 Node
- 

//   mental model:
//   - we need to run a pointer to the end to see how long the list is
//     - we probably want to keep  a count var of how long the node is
//     - if the count is greater then k, we can proceed to phase 2
//     - if the count is less than k, we need to decrement k - count, until count is greater
//       - otherwise we won't end up at the right place to rotate, probably run off the list
//   - after we are dong with phase 1 we have a second pointer, start at the beginning and run ahead k - 1 places
//   - at k - 1, we need to init a third pointer, this will be used to connect to null 
//   - we move the second pointer forward 1 spot to the rotation point
//   - then connect the second pointers' next to the start of the list (do we have a dummy here?)
//   - lastly we stitch the third pointers' next to null  
