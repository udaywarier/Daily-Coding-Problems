//Encoding is straightforward, just count successive characters and put the counts into a string.
function run_length_encode(str)
{
    let encoded = '';

    let count = 1;
    let len = str.length;

    for(let i = 0; i < len; i++)
    {
        if(str[i] !== str[i + 1] || i === len - 1)
        {
            encoded = encoded + count + str[i];
            count = 1;
        }

        else
        {
            count++;    
        }
    }

    return encoded;
}

//For decoding, the character counts are not necessarily single-digit numbers. So first, parse out a number from the string, then the next character will be a character.
function run_length_decode(str)
{
    let decoded = '';

    let count = 0, i = 0, num_start_index = 0, num_end_index = 0;
    let len = str.length;
    
    while(i < len)
    {
        //We are at a character, therefore everything before this must have been part of the number that represents the character count.
        if(str[i] < '0' || str[i] > '9' || i === len - 1)
        {
            num_end_index = i;

            count = parseInt(str.substring(num_start_index, num_end_index));
            for(let j = 0; j < count; j++)
            {
                decoded = decoded + str[i];
            }

            num_start_index = i + 1;
        }

        i++;
    }

    return decoded;
}

let str = 'AAAABBBCCDAA';
console.log(run_length_decode(run_length_encode(str))); //AAAABBBCCDAA

str = 'ABCDEFGGGGGGGGG';
console.log(run_length_decode(run_length_encode(str))); //ABCDEFGGGGGGGGG

str = 'AAAAAAAAAAAAAAAAAA';
console.log(run_length_decode(run_length_encode(str))); //AAAAAAAAAAAAAAAAAA
