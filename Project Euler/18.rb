# problem 18 - max path sum 1

array1 = [
[2],
[6, 7],
[8, 2, 7],
[6, 7, 1, 8],
[3, 4, 6, 9, 1]
         ] # max of 33

array2 = [
[1],
[1, 7],
[9, 2, 7],
[9, 7, 1, 8],
[9, 4, 6, 9, 1]
          ] # max of 32

euler = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 04, 82, 47, 65],
  [19, 01, 23, 75, 03, 34],
  [88, 02, 77, 73, 07, 63, 67],
  [99, 65, 04, 28, 06, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [04, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 04, 23]
]

def max_path_sum(array) 
  (array.size - 1).downto(1) do |n|
    next_row_up = array[n - 1] #3
    current_row = array[n] #4
    ind = 0

    next_row_up = next_row_up.map do |ele| # would have used map_with_index but running Ruby 2.1.0
      if current_row[ind] > current_row[ind + 1]
        total = ele + current_row[ind]
        ind += 1
        total
      else
        total = ele + current_row[ind + 1]
        ind += 1
        total
      end
    end

    array[n - 1] = next_row_up
  end
  
  return array[0][0]
end

puts max_path_sum(euler)