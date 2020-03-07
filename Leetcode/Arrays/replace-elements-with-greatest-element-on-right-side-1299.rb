# @param {Integer[]} arr
# @return {Integer[]}
def replace_elements(arr)
  return [-1] if arr.length == 1

  greatest_seen = arr[-1]
  idx = arr.length - 2

  arr[-1] = -1

  while idx > 0 do
    if greatest_seen > arr[idx]
      arr[idx] = greatest_seen
    else
      temp_val = greatest_seen
      greatest_seen = arr[idx]
      arr[idx] = temp_val
    end

    idx -= 1
  end

  arr[0] = greatest_seen

  arr
end

puts replace_elements([17,18,5,4,6,1]) == [18,6,6,6,1,-1]

# naive solution
# nested iteration
# time O(N^2)
# for every element iterate over every element to the right of it
# store the highest value you've seen and replace the current elemnent
# after it has searched to the end of the array
# if you are at the last element make it -1

# optimized
# right to left iteration
# time O(N)
# space O(1)
# Loop from the rightmost element and continue until the idx is less then 0
# capture the rightmost value in a var and then replace it with -1
# set the rightmost element to -1
# for each element after that:
# if the current value is greater then the stores val:
# save the stored val to a temp var
# write the current val as the new stored val
# replace the current val in the array with the temp val
# when done return the array, this is an in-place solution
