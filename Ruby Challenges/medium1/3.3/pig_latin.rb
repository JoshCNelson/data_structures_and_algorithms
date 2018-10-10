class PigLatin
  VOWELS =  %w[a e i o u y]
  
  def self.translate(string)
    
    loop do
      array_words = string.split(" ")
      
      return string.concat("ay") if VOWELS.include?(string[0])
      string = string[1..-1] + string[0]
    end
  end
  
  
  
end

p PigLatin.translate('quick fast run')
