# Binary Search Mental Models

### Find the Pivot

Problem Example
- Leetcode: #33 Search in Rotated Sorted Array

Works well for:
- sorted arrays that have been rotated `[3,4,5,0,1,2]`

This solution approach works well when we have a sorted array that has been rotated a known number of times. For example, if we know that a sorted array has been rotated once we know that if we find the point at which it has rotated then we know we can binary search to the left or right as it will be a normal sorted array for each side

```ruby
[3,4,5,0,1,2] # sorted array that has been rotated once
# We know that if we can find the pivot (0) then we know that we have a sorted array
# both to the left of the pivot (3,4,5) and from the pivot to the right (0,1,2)
```