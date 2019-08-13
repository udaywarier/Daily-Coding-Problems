def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

def car(cons):
  def get_first(a, b):
    return a
  return cons(get_first)

def cdr(cons):
  def get_last(a, b):
    return b
  return cons(get_last)

print(car(cons(3, 4))) # 3
print(cdr(cons(3, 4))) # 4
