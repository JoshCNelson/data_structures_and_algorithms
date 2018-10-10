class DNA
  def initialize(strand)
    @strand = strand.chars
  end

  def hamming_distance(other)
    distance = 0
    other_strand = other.chars

    strand.each_index do |index|
      distance += 1 unless strand[index] == other_strand[index]
      break if (index + 1) == strand.size || (index + 1) == other_strand.size
    end
    distance
  end

  private

  attr_reader :strand
end
