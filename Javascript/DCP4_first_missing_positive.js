function first_missing_positive(arr)
{
  arr = arr.filter((val) => val >= 0).sort((a, b) => a - b);
  for(let i = 1; i < arr.length; i++)
  {
    if((arr[i] - arr[i - 1]) > 1)
    {
      return arr[i - 1] + 1;
    }
  }

  return arr[arr.length - 1] + 1;
}

let arr = [3, 4, -1, 1]
console.log(first_missing_positive(arr)) // 2
arr = [1, 2, 0]
console.log(first_missing_positive(arr)) // 3

arr = [-1, -12, -3, -5, 0, -6]
console.log(first_missing_positive(arr)) // 1

arr = [1, 2, 3, 4, 5, 6, 8, -1, 0, 5, 5, -12, 0, 0, 6, 6, 6, 8, 8, 6, 8, 68, 8]
console.log(first_missing_positive(arr)) // 7
