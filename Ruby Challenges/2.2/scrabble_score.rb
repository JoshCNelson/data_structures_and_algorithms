class Scrabble
  SCORING = { 1  => %w(A E I O U L N R S T),
              2  => %w(D G),
              3  => %w(B C M P),
              4  => %w(F H V W Y),
              5  => %w(K),
              8  => %w(J X),
              10 => %w(Q Z) }.freeze

  attr_reader :word

  def initialize(word)
    @word = word
  end

  def score
    return 0 if @word.nil?

    score_word = word.upcase.chars
    word_score = 0

    score_word.each do |letter|
      SCORING.values.each do |array|
        word_score += SCORING.key(array) if array.include?(letter)
      end
    end

    word_score
  end

  def self.score(class_word)
    score_word = class_word.upcase.chars
    word_score = 0

    score_word.each do |letter|
      SCORING.values.each do |array|
        word_score += SCORING.key(array) if array.include?(letter)
      end
    end

    word_score
  end
end