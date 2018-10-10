def move_zeroes(array)  
  writer = 0;
  reader = 0;

  while reader < array.size
    reader += 1 while array[reader] == 0

    if array[reader] != 0 && reader < array.size
      array[writer] = array[reader]
      writer += 1
      reader += 1
    end
  end

  while writer < array.size
    array[writer] = 0
    writer += 1
  end
end