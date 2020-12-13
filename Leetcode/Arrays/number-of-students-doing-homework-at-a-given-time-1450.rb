# Leetcode 1450: Number of Students Doing Homework at a Given Time

# @param {Integer[]} start_time
# @param {Integer[]} end_time
# @param {Integer} query_time
# @return {Integer}
def busy_student(start_time, end_time, query_time)
  result = 0

  0.upto(start_time.size - 1) do |idx|
    start = start_time[idx]
    stop = end_time[idx]

    result += 1 if (start..stop).cover?(query_time)
  end

  result
end