let WITH_DIVISION = 1;
let NO_DIVISION = 0;

function array_product(arr, option)
{
    let output_array = [];

    // Linear time solution.
    if(option === WITH_DIVISION)
    {
        let prod = 1;

        for(let i = 0; i < arr.length; i++)
        {
            prod = prod * arr[i];
        }

        for(let i = 0; i < arr.length; i++)
        {
            output_array[i] = prod / input_array[i];
        }
    }

    // Quadratic time solution.
    else
    {
        for(let i = 0; i < arr.length; i++)
        {
            let prod = 1;
            for(let j = 0; j < arr.length; j++)
            {
                if(j != i)
                {
                    prod = prod * arr[j];
                }
            }

            output_array[i] = prod;
        }
    }

    return output_array;
}

let input_array = [1, 2, 3, 4, 5];

// [120, 60, 40, 30, 24]
console.log(array_product(input_array, WITH_DIVISION)); 
console.log(array_product(input_array, NO_DIVISION)); 

input_array = [3, 2, 1];

// [2, 3, 6]
console.log(array_product(input_array, WITH_DIVISION)); 
console.log(array_product(input_array, NO_DIVISION)); 
