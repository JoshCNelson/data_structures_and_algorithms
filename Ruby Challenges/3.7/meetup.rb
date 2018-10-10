require 'date'

class Meetup
  attr_reader :month, :year
  
  def initialize(month, year)
    @month = month
    @year = year
  end
  
  def num_maker(weekday, schedule)
    case schedule
    when :first   then number_gen((13..19), weekday)
    when :second  then number_gen((13..19), weekday)
    when :third   then number_gen((13..19), weekday)
    when :fourth  then number_gen((13..19), weekday)
    when :last    then number_gen((13..19), weekday)
    when :teenth  then number_gen((13..19), weekday)
    end
  end
  
  def number_gen(range, weekday)
    
    range = range.to_a
    
    range.first.upto(range.last) { |day| }
  
  end
  
  
  
  def day(weekday, schedule)

    day = num_maker(weekday, schedule)
    
    Date.new(year, month, day)
  end 
end

p Date.new(2013, 5, 13) ==  Meetup.new(5, 2013).day(:monday, :teenth) #Date.new(year, month, day)
p Date.new(2017, 5, 10) ==  Meetup.new(5, 2017).day(:wednesday, :second) #Date.new(year, month, day)
p Date.new(2014, 8, 19)

p Meetup.new(5, 2017).day(:wednesday, :second)
p Date.new(2017,5,10).cwday 