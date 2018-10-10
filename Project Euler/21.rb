def sum_of_proper_divisors(n)
  array = [1]
  (2..(n / 2)).each do |current_n|
    array << current_n if n % current_n == 0
  end

  array.inject(:+)
end

def sum_of_all_amicable_numbers(n) 
  total = 0

  (1..n).each do |current_n|
    first_sum_of_divisors = sum_of_proper_divisors(current_n)
    second_sum_divisors = sum_of_proper_divisors(first_sum_of_divisors)

    if current_n == second_sum_divisors && first_sum_of_divisors != current_n
      total += first_sum_of_divisors
    end
  end

  total
end

puts sum_of_all_amicable_numbers(10_000) #31626

