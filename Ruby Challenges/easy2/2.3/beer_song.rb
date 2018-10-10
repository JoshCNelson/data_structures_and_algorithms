class BeerSong
  
  def verse(n)
    result = ""
    
    result += first_line(n)
    
    if n > 0
      result += second_line(n)
    else
      result += alternate_line(n)
    end
    
    result
  end
  
  def verses(n, y=n)
    result = ""
    
    n.downto(y) do |bottles|
      result += first_line(bottles)
      
      if bottles > 0
        result += second_line(bottles)
      else
        result += alternate_line(bottles)
      end
    end
    
    result
  end
  
  def first_line(bottles)
    "#{how_many(bottles, :yes)} #{plural?(bottles)} of beer on the wall, #{how_many(bottles)} #{plural?(bottles)} of beer.\n" \
  end
  
  def second_line(bottles)
    bottles_remaining = bottles - 1
    "Take #{left?(bottles)} down and pass it around, #{how_many(bottles_remaining)} #{plural?(bottles_remaining)} of beer on the wall.\n" \
  end
  
  def alternate_line(bottles)
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n" \
  end
  
  def how_many(bottles, capitalize=:no)
    return "No more" if bottles == 0 && capitalize == :yes
    return "no more" unless bottles >= 1
    bottles
  end
  
  def plural?(bottles) 
    if bottles == 1
      "bottle"
    else
      "bottles"
    end
  end
  
  def left?(bottles)
    return "one" unless bottles == 1
    "it"
  end
  
  
end

beer = BeerSong.new
p beer.verses(99, 98)