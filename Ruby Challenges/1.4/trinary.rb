class Trinary
  attr_reader :trinary_string

  def initialize(trinary_string)
    @trinary_string = trinary_string
  end

  def to_decimal
    result = 0
    count = 0

    (trinary_string.size - 1).downto(0) do |number|
      return 0 if trinary_string =~ /[a-z]/i
      result += trinary_string[count].to_i * 3**number
      count += 1
    end

    result
  end
end
