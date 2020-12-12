# Leetcode 1678: Goal Parser Interpretation

# @param {String} command
# @return {String}
def interpret(command)
  idx = 0
  result = ''
  while idx < command.size
    current_char = command[idx]

    if current_car == "G"
      result += 'G'
      idx += 1
    else
      next_char = command[idx + 1]

      if next_char == ")"
        result += "o"
        idx += 2
      else
        result += "al"
        idx += 4
      end
    end
  end

  result
end