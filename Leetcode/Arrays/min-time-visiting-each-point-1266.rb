# @param {Integer[][]} points
# @return {Integer}
def min_time_to_visit_all_points(points)
  points.map.with_index do |current_coord, idx|
    next_coord = points[idx + 1]

    if next_coord
      x_difference = current_coord[0] - next_coord[0]
      y_difference = current_coord[1] - next_coord[1]
      [x_difference.abs,y_difference.abs].max
    else
      0
    end
  end.reduce(:+)
end

# return an integer that describes total time it takes to visit each point (in order)
# there are between 1 and 100 coords given [[1, 2]] is one coord
# each set is basically a tuple [x, y]
# the total potential points are between -1000 and 1000

# initial solution
# at each coord, if there is not another coord you are at the end
# if there is another coord
# check current locaion x and y
# for each +=, if necessary by 1 point
# increment the amount of time it took by 1 step (or second)
# when we have reached the last coord, return the steps (or seconds)

# optimized solution
# time - O(N)
# space - O(N)
# instead of incrementing the current location for each step
# we should be able to tell how long it will reach a destination
# based off of which of the x or y values is larger as this is
# what ultimately determines how long it takes to reach a point
# at each coord we only need to find which is the max and increment steps
# by that many