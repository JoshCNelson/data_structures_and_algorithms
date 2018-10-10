require 'pry'

class SecretHandshake
  Secret = { 1     => 'wink',
             10    => 'double blink',
             100   => 'close your eyes',
             1000  => 'jump'}.freeze
  
  attr_reader :binary
  
  def initialize(binary_input)
    @binary = processed_binary(binary_input) #"1001'"
  end
  
  def commands
    result = []
    return result if binary.to_i == 0
    binary_int = binary.to_i
    count = -1
    
    loop do
      current_iteration = binary_int.to_s.slice(count..-1).to_i
      if current_iteration == 10000
        result.reverse!
      elsif Secret.keys.include?(current_iteration)
        result << Secret[current_iteration]
        binary_int -= current_iteration
      end
      count -= 1
      break if current_iteration.to_s.size == binary.size
    end
    
    result
  end
  
  def processed_binary(b)
    if b.class == Fixnum
      b.to_s(2)
    else
      b
    end
  end
end

handshake = SecretHandshake.new "piggie"
p handshake.commands # => ["wink","jump"]

# handshake2 = SecretHandshake.new "11001"
# handshake2.commands # => ["jump","wink"]
# 
# handshake3 = SecretHandshake.new 1
# handshake3.commands # => ["wink","jump"]
# 
# handshake4 = SecretHandshake.new 'piggies'
# handshake4.commands # => ["wink","jump"]