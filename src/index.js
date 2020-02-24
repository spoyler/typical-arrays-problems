
exports.min = function min (array) 
{
  if (array == null || array.length == 0)
    return 0;

  let min = Number.MAX_SAFE_INTEGER;

  for (let element of array)
  {
    if (element < min)
      min = element;
  }
  return min;
}

exports.max = function max (array) {
  if (array == null || array.length == 0)
    return 0;

  let max = Number.MIN_SAFE_INTEGER;

  for (let element of array)
  {
    if (element > max)
      max = element;
  }
  return max;
}

exports.avg = function avg (array) {
  if (array == null || array.length == 0)
    return 0;

  let average = 0;
  for (let element of array)
  {
      average += element;
  }

  return average / array.length;
}
