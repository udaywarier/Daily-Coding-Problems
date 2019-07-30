// The naive, brute force solution. This is O(n^2) at best.
function longest_substring_naive(str, k)
{
    return Math.max(...(enumerate_all_substrings(str).filter(substring => at_most_k(substring, k) === true).map(elem => elem.length)));
}

function enumerate_all_substrings(str)
{
    let n = str.length;
    let substrings = [];

    for(let i = 0; i <= n; i++)
    {
        for(let j = i + 1; j <= n; j++)
        {
            let curr = str.substring(i, j);

            if(!substrings.includes(curr))
            {
                substrings.push(curr);
            }
        }
    }

    return substrings;
}

function at_most_k(str, k)
{
    let char_count = {};
    let n = str.length;

    for(let i = 0; i < n; i++)
    {
        let curr = str.substring(i, i + 1);

        if(char_count[curr] === undefined)
        {
            char_count[curr] = 1;
        }

        else
        {
            char_count[curr] = char_count[curr] + 1;
        }
    }

    return Object.keys(char_count).length <= k;
}

let str = 'abcba';
let k = 2;
console.log(longest_substring_naive(str, k)); //'bcb' -> 3

k = 3;
console.log(longest_substring_naive(str, k)); //'abcba' -> 5

str = 'Mississippi';
k = 2;
console.log(longest_substring_naive(str, k)); //'ississi' -> 7