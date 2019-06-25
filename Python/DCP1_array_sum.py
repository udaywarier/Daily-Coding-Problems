def array_sum_exists(k, arr):
    complements = dict()

    for i in range(len(arr)):
        complement = k - arr[i]

        if complement > 0:
            if arr[i] in complements:
                return True
            else:
                complements[complement] = arr[i]
    
    return False
        
input_arr = [10, 5, 3, 7]
k = 17

print(array_sum_exists(k, input_arr)) # true

k = 16
print(array_sum_exists(k, input_arr)) # false

k = 10
print(array_sum_exists(k, input_arr)) # true

k = 5
print(array_sum_exists(k, input_arr)) # false
