class Series
  attr_reader :digits

  def initialize(digits)
    @digits = digits.chars.map(&:to_i)
  end

  def slices(digit_series)
    raise ArgumentError if digit_series > digits.size

    result = []
    digits.each_index do |index|
      break if (index + digit_series) > digits.size
      result << digits.slice(index, digit_series)
    end
    result
  end
end
