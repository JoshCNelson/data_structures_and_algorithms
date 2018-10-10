class PhoneNumber
  attr_reader :phone_number

  BAD_NUMBER = '0000000000'.freeze

  def initialize(phone_number)
    @phone_number = phone_number
  end

  def number
    valid_number = phone_number.gsub(/[^\w]/, '')

    if valid_number.to_i.to_s.length == 10
      valid_number
    elsif valid_number.length == 11 && valid_number[0] == '1'
      valid_number[1..-1]
    else
      BAD_NUMBER
    end
  end

  def to_s
    if phone_number.size == 10
      area_code = phone_number[0..2]
      prefix = phone_number[3..5]
      line_number = phone_number[6..-1]
    else
      area_code = phone_number[1..3]
      prefix = phone_number[4..6]
      line_number = phone_number[7..-1]
    end

    "(#{area_code}) #{prefix}-#{line_number}"
  end

  def area_code
    number[0..2]
  end
end