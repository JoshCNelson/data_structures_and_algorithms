class Integer
  ROMANS = { "M" => 1000, "CM" => 900, "D" => 500, "CD" => 400,
             "C" => 100, "XC" => 90, "L" => 50, "XL" => 40,
             "X" => 10, "IX" => 9, "V" => 5, "IV" => 4, "I" => 1 }.freeze

  def to_roman
    n = self
    result = ''

    ROMANS.each do |key, value|
      while n >= value
        result << key
        n -= value
      end
    end

    result
  end
end