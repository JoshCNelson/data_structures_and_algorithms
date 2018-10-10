class InvalidCodonError < StandardError
end

class Translation
  def self.of_codon(seq_string)
    case seq_string
    when 'AUG' then 'Methionine'
    when 'UUU' then 'Phenylalanin'
    when 'UUC' then 'Phenylalanin'
    when 'UUA' then 'Leucine'
    when 'UUG' then 'Leucine'
    when 'UCU' then 'Serine'
    when 'UCC' then 'Serine'
    when 'UCA' then 'Serine'
    when 'UCG' then 'Serine'
    when 'UAU' then 'Tyrosine'
    when 'UAC' then 'Tyrosine'
    when 'UGU' then 'Cysteine'
    when 'UGC' then 'Cysteine'
    when 'UGG' then 'Tryptophan'
    when 'UAA' then 'STOP'
    when 'UAG' then 'STOP'
    when 'UGA' then 'STOP'
    else raise InvalidCodonError
    end
  end

  def self.of_rna(seq_string)
    sequence = []

    until seq_string.empty?
      current_seq = seq_string.slice!(0..2)
      break if Translation.of_codon(current_seq) == 'STOP'
      sequence << Translation.of_codon(current_seq)
    end
    sequence
  end
end