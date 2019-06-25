class Node:
    def __init__(self, val, left=None, right=None):
      self.val = val
      self.left = left
      self.right = right

    def add(self, node, val):
      if(val < node.val):
        if(node.left is None):
          node.left = Node(val)
        else:
          self.add(node.left, val)
      else:
        if(node.right is None):
          node.right = Node(val)
        else:
          self.add(node.right, val)

    def depth_first(self, node):
      level_order_result = []
      for i in range(0, self.height(node) + 1):
        self.print_level(node, i, level_order_result)
      return level_order_result

    def print_level(self, node, level, level_order_result):
      if(level is 0 and node != None):
        level_order_result.append(node.val)
      else:
        if(node.left != None):
          self.print_level(node.left, level - 1, level_order_result)
        if(node.right != None):
          self.print_level(node.right, level - 1, level_order_result)

    def height(self, node):
      if node is None:
        return -1
      else:
        return 1 + max(self.height(node.left), self.height(node.right))

    def serialize(self, root):
      level_order_result = self.depth_first(root)
      serialization = []
      for elem in level_order_result:
        serialization.append(str(elem))
      return ''.join(serialization)

    def deserialize(self, str):
      new_node = Node(int(str[0]))
      for i in range(1, len(str)):
        new_node.add(new_node, int(str[i]))
      return new_node

node = Node(3)
node.add(node, 1)
node.add(node, 0)
node.add(node, 2)
node.add(node, 5)
node.add(node, 4)
node.add(node, 6)
print(node.depth_first(node)) # [3, 1, 5, 0, 2, 4, 6]
print(node.depth_first(node.deserialize(node.serialize(node)))) # also [3, 1, 5, 0, 2, 4, 6]
