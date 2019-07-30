// Explanation- consider a unit circle of radius one. Area = pi*r^2 = pi*1^2 = pi. Now consider the unit circle enclosed in a square, which must have side length 2. For the 
// square, Area = s^2 = 2^2 = 4. So the ratio Area_circle/Area_square = pi/4. Next, generate n random points within that square, i.e. n random points such that each point's x
// and y coordinates lie in the range [-2, 2]. As n -> infinity, num_points_in_circle/n -> Area_circle/Area_square ~ pi/4, therefore we can approximate pi. 

// Uses a Monte Carlo approximation to estimate pi, n is the number of points to randomly generate.
function monte_carlo(n)
{
    let count = 0;

    for(let i = 0; i < n; i++)
    {
        // Generates a random point in the range [-1, 1].
        let rand_x = (Math.random() * 2) - 1;
        let rand_y = (Math.random() * 2) - 1;

        // console.log(rand_x);
        // console.log(rand_y);

        if((rand_x * rand_x) + (rand_y * rand_y) < 1)
        {
            count = count + 1;
        }
    }

    return (count / n) * 4;
}

// Trying to estimate pi within a tolerance of three decimal places.
let tol = 0.001;
let i = 1;
let estimate = 0;

while(Math.abs(estimate - Math.PI) > tol)
{
    i = i * 10;
    estimate = monte_carlo(i);
}

console.log('Generating ' + i + ' points yields ' + estimate + ', which approximates pi to three decimal places');