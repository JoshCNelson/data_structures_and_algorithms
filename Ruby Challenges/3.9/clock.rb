require 'pry'

class Clock
  def self.at(hour, minutes=0)
    hour
  end
  
  def to_s
    sprintf("0%d:0%d", @hour, @minutes)
    binding.pry
    @hour
    "wierd"
  end
  
end

p Clock.at(8).to_s
p Clock.at(9).to_s