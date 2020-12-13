# Leetcode 1491: Average Salary Excluding the Minimum and Maximum Salary

# @param {Integer[]} salary
# @return {Float}
def average(salary)
  min_salary = Float::INFINITY
  max_salary = 0

  total = salary.inject(0) do |acc, s|
    min_salary = s if s < min_salary
    max_salary = s if s > max_salary

    acc + s
  end

  (total - min_salary - max_salary) / (salary.size - 2).to_f
end