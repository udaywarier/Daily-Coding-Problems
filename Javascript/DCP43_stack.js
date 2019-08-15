// One possible change to save space- could cut the size of the stack in half if size goes less than half of capacity.

class Stack
{
    constructor(capacity = 10)
    {
        this.capacity = capacity;
        this.size = 0;
        this.max = Number.MIN_SAFE_INTEGER;
        this.stack = Array(this.capacity).fill(null);
    }

    push(val)
    {
        // If we have space just push onto the end of the stack.
        if(this.size < this.capacity)
        {
            this.stack[this.size] = val;
        }

        // Double the size of the stack, recopy everything, then push.
        else
        {
            // Double the size of the array each time for amortized constant insertion.
            let temp = Array(this.capacity * 2).fill(null);

            for(let i = 0; i < this.capacity; i++)
            {
                temp[i] = this.stack[i];
            }

            temp[this.size] = val;
            this.stack = temp;
            this.capacity = this.capacity * 2;
        }

        // Update the size of the stack.
        this.size = this.size + 1;

        // Update max if applicable.
        this.max = (val > this.max) ? val : this.max;
    }

    pop()
    {
        if(this.size === 0)
        {
            console.log('Error (pop): stack contains no elements!');
            return null;
        }

        else
        {
            let popped = this.stack[this.size - 1];

            // We are popping the max, so we need to recompute what the max is.
            if(this.max === popped)
            {
                let temp = Number.MIN_SAFE_INTEGER;

                for(let i = 0; i < this.size - 1; i++)
                {
                    // Recompute the max.
                    if(this.stack[i] > temp)
                    {
                        temp = this.stack[i];
                    }
                }

                this.max = temp;
            }

            this.stack[this.size - 1] = null;
            this.size = this.size - 1;

            return popped;
        }
    }

    maximum()
    {
        if(this.size === 0)
        {
            console.log('Error (max): stack contains no elements!');
        }

        else
        {
            return this.max;
        }
    }

    print()
    {
        console.log(this.stack);
    }
}

let s = new Stack();

for(let i = 1; i <= 8; i++)
{
    s.push(i);
}

s.print(); // [1, 2, 3, 4, 5, 6, 7, 8, null, null]
console.log(s.maximum()); // 8

console.log(s.pop()); // 8
console.log(s.maximum()); // 7

for(let i = 9; i <= 12; i++)
{
    // Resize before inserting 11.
    s.push(i);
}

s.print(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, null, null, null, null, null, null, null, null]
console.log(s.maximum()); // 12

console.log(s.pop()); // 12
console.log(s.maximum()); // 11