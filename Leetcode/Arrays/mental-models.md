# Array Mental Models

### Reader / Writer (2 pointer problem)

Problem Example
- Leetcode: #283 Move Zeroes
  - This is the cannonical example

Works well for:
- solutions that require some form of in place sorting where all the data lives inside the single array

How does it work:
- You have two pointers, reader and writer
  - writer usually starts at 0 index, reader usually 1 index
  - reader will advance forward until it encounters a specific condition you are looking to solve for
  - now because we know the value that reader is on we are able to use writer to "write" that information to its current index and then advance itself one space forward.

```bash
# say we want to move all zeroes to the end while
# maintaining relative order of non-zeros
# w = writer, r = reader
# w r
 [0,1,0,3,12]
```