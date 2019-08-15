// Note: this whole thing can be made more efficient by using character arrays instead of strings, since strings are immutable.
// However, overall complexity remains O(n) for time and O(1) for space.

function non_duplicated(list)
{
    let len = list.length;
    let xor = bin(0);

    for(let i = 0; i < len; i++)
    {
        xor = add(xor, bin(list[i]));
    }

    return int(mod(xor, 3));
}

// Takes a binary string and mods every digit of it by the given modulus.
function mod(str, modulus)
{
    let len = str.length;

    for(let i = 0; i < len; i++)
    {
        // Save some time.
        if(parseInt(str[i]) >= modulus)
        {
            str = str.substring(0, i) + (parseInt(str[i]) % modulus).toString() + str.substring(i + 1);
        }
    }

    return str;
}

// Takes a binary string and converts it to its equivalent integer.
function int(str)
{
    let len = str.length;
    let num = 0;

    for(let i = 0; i < len; i++)
    {
        num = num + (parseInt(str[len - i - 1]) * Math.pow(2, i));
    }

    return num;
}

// Adds two binary strings bit-by-bit with no carry.
function add(num1, num2)
{
    let sum = num1;
    let len = num1.length;

    for(let i = 0; i < len; i++)
    {
        if(num2[i] !== '0')
        {
            sum = sum.substring(0, i) + (parseInt(num1[i]) + 1).toString() + sum.substring(i + 1);
        }
    }
    
    return sum;
}

// Returns the binary representation of a number using 8 bits.
function bin(num)
{
    return lpad(num.toString(2));
}

// Left pads a binary string with zeroes up to a length of 8.
function lpad(str)
{
    let lpad_len = 8 - str.length;

    for(let i = 0; i < lpad_len; i++)
    {
        str = '0' + str;
    }

    return str;
}


let list = [13, 19, 13, 13];
console.log(non_duplicated(list)); // 19

list = [6, 1, 3, 3, 3, 6, 6];
console.log(non_duplicated(list)); // 1