#Multiples of 3 and 5
#Problem 1 
#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#Find the sum of all the multiples of 3 or 5 below 1000.

def multiples_of_three_and_five(number)
  total = 0

  (1..(number - 1)).each { |n| total += n if n % 3 == 0 || n % 5 == 0 }
  
  return total
end

puts multiples_of_three_and_five(1000)
