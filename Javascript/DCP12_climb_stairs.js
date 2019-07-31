function unique_ways(n)
{
    if(n === 0 || n === 1)
    {
        return 1;
    }

    else
    {
        // Use dynamic programming instead of the naive recursive solution.
        ways = new Array(n);
        ways[0] = 1;
        ways[1] = 1;

        for(let i = 2; i <= n; i++)
        {
            ways[i] = ways[i - 1] + ways[i - 2];    
        }

        return ways[n];
    }
}

for(let i = 1; i <= 5; i++)
{
    console.log(i + ', ways: ' + unique_ways(i)); //1, 2, 3, 5, 8
}
