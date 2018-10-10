function judgeCirle(moves) {
  let startingPosition = [0, 0];
  
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U' || moves[i] === 'D') {
      
      if (moves[i] === 'U') {
        startingPosition[0] += 1;
      } else {
        startingPosition[0] -= 1;
      }
      
    } else {
    
      if (moves[i] === 'R') {
        startingPosition[1] += 1;
      } else {
        startingPosition[1] -= 1;
      }
      
    }
  }
  
  return startingPosition[0] === 0 && startingPosition[1] === 0;
};