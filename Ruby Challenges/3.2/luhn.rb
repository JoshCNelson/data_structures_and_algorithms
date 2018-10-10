class Luhn
  attr_reader :number
  
  def initialize(number)
    @number = number
  end
  
  def checksum
    addends.reduce(:+)
  end
  
  def addends
    result = []
    processed_number = number.to_s.reverse.chars.map(&:to_i)
    
    processed_number.each_with_index do |num, index|
      if index.odd?
        result << multiply(num)
      else
        result << num
      end
    end
    
    result.reverse
  end
  
  def valid?
    checksum % 10 == 0
  end
  
  
  def self.create(integer)
    
    0.upto(9) do |char|
      current = integer.to_s << char.to_s
      current_int = current.to_i
      luhn = Luhn.new(current_int)
      return current_int if luhn.valid?  
    end
  end
  
  private
  
  def multiply(input)
    multiplied = input * 2
    
    if multiplied >= 10
      multiplied - 9
    else
      multiplied
    end
  end
end
