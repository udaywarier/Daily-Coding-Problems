function compute_itinerary(flights, start)
{
    let len = Object.keys(flights).length;
    let flight_count = 0;
    let itinerary = [];

    while(flights[start] !== undefined)
    {
        itinerary.push(start);
        flight_count++;
        start = flights[start];
    }

    if(flight_count === len)
    {
        itinerary.push(start);
        return itinerary;
    }

    else
    {
        return null;
    }
}

let flights = [];
flights['SFO'] = 'HKO';
flights['YYZ'] = 'SFO';
flights['YUL'] = 'YYZ';
flights['HKO'] = 'ORD';
let start = 'YUL';
console.log(compute_itinerary(flights, start)); // [YUL, YYZ, SFO, HKO, ORD]

flights = [];
flights['SFO'] = 'COM';
flights['COM'] = 'YYZ';
start = 'SFO';
console.log(compute_itinerary(flights, start)); // [SFO, COM, YYZ]

start = 'COM';
console.log(compute_itinerary(flights, start)); // null
