class Anagram
  def initialize(string)
    @string = string
    @anagram_list = []
  end

  def match(array)
    array.each do |word|
      next if word.downcase == string
      processed_word = word.downcase.chars.sort
      processed_string = string.downcase.chars.sort
      anagram_list << word if processed_word == processed_string
    end
    anagram_list
  end

  def sort
    anagram_list.sort { |a, b| a <=> b }
  end

  private

  attr_reader :string, :anagram_list
end