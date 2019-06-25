function array_sum_exists(k, arr)
{
    let complements = [];

    for(let i = 0; i < arr.length; i++)
    {
        let complement = k - arr[i];

        if(complement > 0)
        {
            if(complements[arr[i]] != undefined)
            {
                return true;
            }

            else
            {
                complements[complement] = arr[i];
            }
        }
    }

    return false;
}

let input_array = [10, 15, 3, 7];

let k = 17;
console.log(array_sum_exists(k, input_array)); //true

k = 16;
console.log(array_sum_exists(k, input_array)); //false

k = 10;
console.log(array_sum_exists(k, input_array)); //true

k = 5;
console.log(array_sum_exists(k, input_array)); //false
