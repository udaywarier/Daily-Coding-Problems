class Node 
{
  constructor(val, left = null, right = null) 
  {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  add(node, val)
  {
    if(val < node.val)
    {
      if(node.left == null)
      {
        node.left = new Node(val);
      }

      else
      {
        this.add(node.left, val);
      }
    }

    else
    {
      if(node.right == null)
      {
        node.right = new Node(val);
      }

      else
      {
        this.add(node.right, val);
      }
    }
  }

  breadth_first(node)
  {
    let level_order = [];
    for(let i = 0; i < this.height(node) + 1; i++)
    {
      this.print_level(node, i, level_order);
    }

    return level_order;
  }

  print_level(node, level, level_order)
  {
    if(node != null)
    {
      if(level == 0)
      {
        level_order.push(node.val);
      }

      else
      {
        this.print_level(node.left, level - 1, level_order);
        this.print_level(node.right, level - 1, level_order);
      }
    }
  }

  height(node)
  {
    if(node == null)
    {
      return -1;
    }

    else
    {
      return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
  }

  serialize(node)
  {
    return this.breadth_first(node).join('');
  }

  deserialize(str)
  {
    let new_node = new Node(parseInt(str[0]));
    str.split('').forEach(letter =>
    {
      if(letter != str[0])
      {
        this.add(new_node, parseInt(letter));
      }
    });
    return new_node;
  }

}

n = new Node(3);
n.add(n, 1);
n.add(n, 5);
n.add(n, 0);
n.add(n, 2);
n.add(n, 4);
n.add(n, 6);
console.log(n.breadth_first(n)); // [3, 1, 5, 0, 2, 4, 6]
console.log(n.breadth_first(n.deserialize(n.serialize(n)))); // also [3, 1, 5, 0, 2, 4, 6]
