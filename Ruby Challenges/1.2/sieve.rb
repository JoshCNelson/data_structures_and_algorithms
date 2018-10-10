class Sieve
  attr_accessor :marked

  def initialize(limit)
    @limit = limit
    @marked = []
  end

  def primes
    result = []
    2.upto(limit) do |number|
      next if marked.include?(number)
      result << number
      multiples_of(number)
    end
    result
  end

  private

  attr_reader :limit

  def multiples_of(number)
    counter = 2
    until number * counter > limit
      self.marked << number * counter
      counter += 1
    end
  end
end
