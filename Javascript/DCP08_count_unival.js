class Node
{
  constructor(data, left = null, right = null)
  {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  inorder_traversal(node, tree)
  {
    if(node.left != null)
    {
      this.inorder_traversal(node.left, tree);
    }

    tree.push(node);

    if(node.right != null)
    {
      this.inorder_traversal(node.right, tree);
    }

    return tree;
  }

  count_unival(node)
  {
    let tree = this.inorder_traversal(node, []);
    let count = 0;

    tree.forEach(elem => 
    {
      if(this.is_unival(elem))
      {
        count++;
      }
    });

    return count;
  }

  //TODO: Change this to use dynamic programming instead of a DFS every time.
  is_unival(node)
  {
    if((node === null) || (node.left === null && node.right === null))
    {
      return true;
    }

    else if(node.left === null)
    {
      return (node.data === node.right.data) && (this.is_unival(node.right));
    }

    else if(node.right === null)
    {
      return (node.data === node.left.data) && (this.is_unival(node.left));
    }

    else
    {
      return (node.data === node.left.data) && (node.data === node.right.data) 
              && this.is_unival(node.left) && this.is_unival(node.right);
    }
  }
}

tree = new Node(0, new Node(1), new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0)))
console.log(tree.count_unival(tree)) // 5

tree = new Node(1, new Node(1, new Node(1), new Node(1)), new Node(1, new Node(1), new Node(1)))
console.log(tree.count_unival(tree)) // 7

tree = new Node(0, new Node(1), new Node(2))
console.log(tree.count_unival(tree)) // 2

tree = new Node(0, new Node(1, new Node(2, new Node(3, new Node(4)))))
console.log(tree.count_unival(tree)) // 1
