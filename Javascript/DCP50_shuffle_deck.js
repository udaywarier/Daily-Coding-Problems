// This is an example of the Fisher-Yates shuffle.
function shuffle(deck)
{
    let temp = deck;
    let size = deck.length;

    for(let i = size - 1; i >= 0; i--)
    {
        let rand = random(i);

        let swap_card = deck[rand];
        let curr = deck[i];

        temp[i] = swap_card;
        temp[rand] = curr;
    }

    return temp;
}

// Returns a random integer between 1 and k.
function random(k)
{
    return Math.floor((Math.random() * k) + 1);
}

let deck = [];
for(let i = 0; i < 52; i++)
{
    deck.push(i + 1);
}

for(let i = 0; i < 100; i++)
{
    console.log(shuffle(deck)); // All different possibilities for the 52! permutations of the deck.
}