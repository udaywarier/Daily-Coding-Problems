// This is in-place since we only use constant storage.
function segregate_rgb(list)
{
    let counts = 
    {
        R: 0,
        G: 0,
        B: 0
    };

    list.forEach(elem => counts[elem]++);

    let i;

    for(i = 0; i < counts.R; i++)
    {
        list[i] = 'R';
    }

    let temp = i;
    for(i = temp; i < temp + counts.G; i++)
    {
        list[i] = 'G';
    }

    temp = i;
    for(i = temp; i < temp + counts.B; i++)
    {
        list[i] = 'B';
    }

    return list;
}

let list = ['B', 'G', 'R'];
console.log(segregate_rgb(list)); // [R, G, B]

list = [];
console.log(segregate_rgb(list)); // []

list = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
console.log(segregate_rgb(list)); // [R, R, R, G, G, B, B]

list = ['G', 'G', 'R', 'G', 'R', 'R', 'G'];
console.log(segregate_rgb(list)); // [R, R, R, G, G, G, G]
