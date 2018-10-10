#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

def is_prime?(num)
  2.upto(num - 1) { |n| return false if num % n == 0 }
  return true
end

def largest_prime_factor(number) 
  number = number / 2
  
  loop do
    return number if is_prime?(number)
    number -= 1
  end
end

puts largest_prime_factor(600851475143)

