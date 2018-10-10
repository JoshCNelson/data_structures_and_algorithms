class School
  attr_accessor :school
  
  def initialize
    @school = {}
  end
  
  def to_h
    self.school = Hash[school.sort]
    self.school.each { |k,v| v.sort! }
  end
  
  def add(student, grade)
    if school.keys.include?(grade)
      self.school[grade] << student
    else
      self.school[grade] = [student]
    end
  end
  
  def grade(grade)
    if school[grade]
      school[grade]
    else
      []  
    end
  end
end
