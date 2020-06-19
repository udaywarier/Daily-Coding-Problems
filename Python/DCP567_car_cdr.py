def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

def car(cons):
  def get_first_element(a, b):
    return a
  return cons(get_first_element)

def cdr(cons):
  def get_last_element(a, b):
    return b
  return cons(get_last_element)

print(car(cons(3, 4)))
print(cdr(cons(3, 4)))
