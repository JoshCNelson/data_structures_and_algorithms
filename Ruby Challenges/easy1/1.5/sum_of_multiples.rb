class SumOfMultiples
  DEFAULT_NUMBERS = [3, 5]

  attr_reader :multiples

  def initialize(*multiples)
    @multiples = multiples
  end

  def self.to(limit)
    self.new(*DEFAULT_NUMBERS).to(limit)
  end

  def to(limit)
    result = []
    multiples.each do |number|
      number.step(limit - 1, number) { |i| result << i }
    end

    return 0 if result.empty?
    result.uniq.inject(:+)
  end
end
