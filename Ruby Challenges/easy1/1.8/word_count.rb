class Phrase
  NON_WORDS = /[^a-z1-9']/i
  STRIPPER = /'\w+'/
  
  attr_reader :word_string
  
  def initialize(word_string)
    @word_string = word_string.downcase.concat(' ')
  end
  
  def word_count
    hash = {}
    
    processed_words = word_string.gsub!(NON_WORDS," ").split(" ") #["testing", "1", "2", "testing"]
    
    
    processed_words.uniq.each do |word|
      word.delete!("'") if word =~ STRIPPER
      hash[word] = processed_words.count(word)
    end
    
    hash
  end
end

#phrase = Phrase.new('word')
#p phrase.word_count

phrase2 = Phrase.new('word ')
p phrase2.word_count