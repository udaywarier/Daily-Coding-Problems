WITH_DIVISION = 0
NO_DIVISION = 1

def array_product(arr, option):
    output = [None] * len(arr)
    if(option is WITH_DIVISION):
        prod = 1
        for elem in arr:
            prod = prod * elem
        for i in range(0, len(arr)):
            output[i] = prod / arr[i]
    else:
        for i in range(0, len(arr)):
            prod = 1
            for j in range(0, len(arr)):
                if(i != j):
                    prod = prod * arr[j]
            output[i] = prod
    return output

arr = [1, 2, 3, 4, 5]
print(array_product(arr, WITH_DIVISION)) # [120, 60, 40, 30, 24]
print(array_product(arr, NO_DIVISION)) # [120, 60, 40, 30, 24]

arr = [3, 2, 1]
print(array_product(arr, WITH_DIVISION)) # [2, 3, 6]
print(array_product(arr, NO_DIVISION)) # [2, 3, 6]
