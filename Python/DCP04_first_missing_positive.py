def first_missing_positive(arr):
  for elem in reversed(arr):
    if(elem < 0):
      arr.remove(elem)
  arr.sort()
  for i in range(1, len(arr)):
    if((arr[i] - arr[i - 1]) > 1):
      return arr[i - 1] + 1
  return arr[len(arr) - 1] + 1

arr = [3, 4, -1, 1]
print(first_missing_positive(arr)) # 2

arr = [1, 2, 0]
print(first_missing_positive(arr)) # 3

arr = [-1, -12, -3, -5, 0, -6]
print(first_missing_positive(arr)) # 1

arr = [1, 2, 3, 4, 5, 6, 8, -1, 0, 5, 5, -12, 0, 0, 6, 6, 6, 8, 8, 6, 8, 68, 8]
print(first_missing_positive(arr)) # 7
