class Octal
  attr_reader :octal_string

  def initialize(octal_string)
    @octal_string = octal_string
  end

  def to_decimal
    return 0 if (octal_string =~ /[a-z]/i) || octal_string[-1].to_i > 7
    result = 0
    count = 0

    (octal_string.size - 1).downto(0) do |number|
      result += octal_string[count].to_i * 8**number
      count += 1
    end

    result
  end
end