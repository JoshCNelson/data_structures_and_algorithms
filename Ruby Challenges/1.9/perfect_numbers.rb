class PerfectNumber

  def self.classify(number)
    raise RuntimeError if number < 0
    result = 0

    1.upto(number-1) { |num| result += num if number % num == 0 }
    return 'perfect' if number == result
    return 'abundant' if number < result
    return 'deficient'
  end
end
