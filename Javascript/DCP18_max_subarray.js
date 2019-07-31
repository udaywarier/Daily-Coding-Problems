function max_subarray(arr, k)
{
    let n = arr.length;
    let max_values = [];

    for(let i = 0, j = k - 1; i < n - k, j < n; i++, j++)
    {
        max_values.push(Math.max(...arr.slice(i, j + 1)));
    }

    return max_values;
}

let arr = [10, 5, 2, 7, 8, 7];
let k = 3;

console.log(max_subarray(arr, k)); //[10, 7, 8, 8]
