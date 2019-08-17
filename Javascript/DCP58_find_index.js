// Step 1: use binary search to find the rotation index. Time complexity- O(log(n)).
// Step 2: do a modified binary search starting from the rotation index on the rotated list. Time complexity- O(log(n)). 
// Overall this has a time complexity of O(log(n)), which is faster than linear.
function find_index(list, elem)
{
    let low = 0;
    let high = list.length - 1;
    let mid = -1;

    // First do a binary search to figure out at what index the rotation occurs. This will be when list[low] > list[high] and low = high - 1
    while(low < high - 1)
    {
        mid = Math.floor((high + low) / 2);

        // Rotation index must be somewhere in [low, mid].
        if(list[low] > list[mid])
        {
            high = mid;
        }

        // Rotation index must be somewhere in [mid, high].
        else
        {
            low = mid;
        }
    }

    // Since we used floor, high will now be the number of rotations performed on the original list. This means list[high] is the least element
    // and list[low] is the greatest element. Now, just do a binary search to find elem using high as low and low as high.
    let rotation_index = high;
    high = low;
    low = rotation_index;

    while(low < high - 1)
    {
        
    }
}

let list = [13, 18, 25, 2, 8, 10];
let elem = 8;
find_index(list, elem);