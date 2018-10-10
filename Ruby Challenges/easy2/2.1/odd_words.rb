def mixer!(input)
  result = []
  
  input.split.each_with_index do |word, index|
    word.reverse! if index.odd?
    result << word
  end.join(" ")
end

def mixer(input)
  space_count = 0
  internal_counter = 1
  result = ''
  
  input.chars.each do |element|
    space_count += 1 if element == " "
    
    if space_count.odd?
      result[-internal_counter] += element
      next if element == " "
      internal_counter += 1
    else
      result += element
      internal_counter = 1
    end
  end
  result
end

p mixer("whats the matter with kansas.")