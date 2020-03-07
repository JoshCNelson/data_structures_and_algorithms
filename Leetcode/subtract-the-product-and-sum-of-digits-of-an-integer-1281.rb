# @param {Integer} n
# @return {Integer}
def subtract_product_and_sum(n)
  product = 1
  sum = 0

  n.to_s.each_char do |char|
    product *= char.to_i
    sum += char.to_i
  end

  product - sum
end

puts subtract_product_and_sum(234) == 15
puts subtract_product_and_sum(4421) == 21

# return the difference of the
# product and sum of the integers digits`
# n is between 1 and 10^5

# solution
# have a product and sum vars
# covert the integer into a string
# loop over each character, convert it
# back to an integer and
# multiply it by the product var and add it to the
# sum var
# after completing iteration subtract product - sum for
# the result
