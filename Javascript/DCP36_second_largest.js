class BSTNode
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST
{
    constructor()
    {
        this.root = null;
    }

    insert(data, curr = this.root)
    {
        if(this.root === null)
        {
            this.root = new BSTNode(data);
        }

        else if(data <= this.root.data)
        {
            if(curr.left === null)
            {
                curr.left = new BSTNode(data);
            }

            else
            {
                this.insert(data, curr.left);
            }
        }

        else
        {
            if(curr.right === null)
            {
                curr.right = new BSTNode(data);
            }

            else
            {
                this.insert(data, curr.right);
            }
        }
    }

    print(curr = this.root)
    {
        if(curr !== null)
        {
            this.print(curr.left);
            console.log(curr.data);
            this.print(curr.right);
        }
    }

    // TODO: Fix this!
    second_largest()
    {
        let curr = this.root;

        while(curr.right.right !== null)
        {
            curr = curr.right;
        }

        return curr.data;
    }
}

let tree = new BST();
tree.insert(3);
tree.insert(2);
tree.insert(4);
tree.insert(11);
tree.insert(6);
tree.insert(7);
tree.insert(10);
tree.insert(9);
tree.insert(12);
tree.insert(1);
console.log(tree.second_largest());
