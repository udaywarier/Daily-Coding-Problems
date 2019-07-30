function cons(a, b)
{
  let pair = function(f)
  {
    return f(a, b);
  }

  return pair;
}

function car(cons)
{
  let get_first = function(a, b)
  {
    return a;
  }

  return cons(get_first);
}

function cdr(cons)
{
  let get_second = function(a, b)
  {
    return b;
  }

  return cons(get_second);
}

console.log(car(cons(3, 4))); // 3
console.log(cdr(cons(3, 4))); // 4
