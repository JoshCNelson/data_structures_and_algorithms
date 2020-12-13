# Leetcode 1380: Lucky Numbers in a Matrix

# @param {Integer[][]} matrix
# @return {Integer[]}
def lucky_numbers (matrix)
  row_min = Array.new(matrix.size, Float::INFINITY)
  col_max = Array.new(matrix[0].size, 0)

  matrix.each.with_index do |row, row_index|
    row.each.with_index do |cell, col_index|
      row_min[row_index] = cell if cell < row_min[row_index]
      col_max[col_index] = cell if cell > col_max[col_index]
    end
  end

  row_min.intersection(col_max)
end