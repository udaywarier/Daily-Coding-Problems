function max_contiguous(list)
{
    let len = list.length;
    let subarray = 0;
    let max = 0;

    for(let i = 0; i < len; i++)
    {
        subarray = Math.max(subarray + list[i], 0);
        max = Math.max(max, subarray);
    }

    return max;
}

let list = [34, -50, 42, 14, -5, 86];
console.log(max_contiguous(list)); // 137

list = [-5, -1, -8, -9];
console.log(max_contiguous(list)); // 0