function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((a, c ) => a + c, 0)/ classPoints.length
    // use reduce to find the value of all the grades of the class, then divide it by the number of indexes(grades) in the array with .length
    
    if( yourPoints > average)
    {
      return true
    }
    else{
      return false
    }
    }
    