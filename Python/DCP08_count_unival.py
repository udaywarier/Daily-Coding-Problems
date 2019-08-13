class Node:
  def __init__(self, data, left=None, right=None):
    self.data = data
    self.left = left
    self.right = right

  def inorder_traversal(self, node, tree):
    if(node.left):
      self.inorder_traversal(node.left, tree)
    tree.append(node)
    if(node.right):
      self.inorder_traversal(node.right, tree)
    return tree
  
  def count_unival(self, node):
    tree = self.inorder_traversal(node, [])
    count = 0
    for node in tree:
      if self.is_unival(node):
        count = count + 1
    return count

  # TODO: Change this to use dynamic programming instead of a DFS every time.
  def is_unival(self, node):
    if(node is None or (node.left is None and node.right is None)):
      return True
    elif(node.left is None):
      return (node.data is node.right.data) and self.is_unival(node.right)
    elif(node.right is None):
      return (node.data is node.left.data) and self.is_unival(node.left)
    else:
      return (node.data is node.left.data is node.right.data) and self.is_unival(node.left) and self.is_unival(node.right)

tree = Node(0, Node(1), Node(0, Node(1, Node(1), Node(1)), Node(0)))
print(tree.count_unival(tree)) # 5

tree = Node(1, Node(1, Node(1), Node(1)), Node(1, Node(1), Node(1)))
print(tree.count_unival(tree)) # 7

tree = Node(0, Node(1), Node(2))
print(tree.count_unival(tree)) # 2

tree = Node(0, Node(1, Node(2, Node(3, Node(4)))))
print(tree.count_unival(tree)) # 1
