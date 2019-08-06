function minimum_rooms(intervals)
{
    if(intervals.length === 1)
    {
        return 1;
    }

    else
    {
        intervals = intervals.sort((a, b) => (a[0] === b[0]) ? a[1] > b[1] : a[0] > b[0]);
    
        let low = 0;
        let high = intervals.length;
        let mid;
    
        // Binary search to find minimum viable number of classrooms.
        while(low < high - 1)
        {
            mid = Math.floor((high + low) / 2);
        
            // We might be able to do this with less rooms.
            if(check_valid(intervals, mid) === true)
            {
                high = mid;
            }

            // We don't have enough rooms.
            else
            {
                low = mid;
            }
        }

        return low;
    }
}

// Checks to see if the given number of rooms is enough to hold the given number of classes.
function check_valid(intervals, num_rooms)
{
    let schedule = [];
    let room = 0;

    for(let i = 0; i < intervals.length; i++)
    {
        //TODO: THIS!!!
    }
}

let intervals = [[30, 75], [0, 50], [60, 150]];
console.log(minimum_rooms(intervals)); // 2

intervals = [[10, 20]];
console.log(minimum_rooms(intervals)); // 1

intervals = [];
console.log(minimum_rooms(intervals)); // 0

intervals = [[30, 200], [30, 400], [30, 200], [230, 400], [200, 500], [430, 600], [430, 600], [530, 800], [630, 800]];
console.log(minimum_rooms(intervals)); // 3
