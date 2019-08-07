//TODO: FINISH THIS!

class HeapNode
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class MinHeap
{
    constructor()
    {
        this.size = 0;
        this.root = null;
    }

    size()
    {
        return this.size;
    }

    insert(data, curr = this.root)
    {
        let to_insert = new HeapNode(data);

        if(this.root === null)
        {
            this.root = to_insert;
        }

    }
}

class MaxHeap
{
    constructor()
    {
        this.size = 0;
        this.root = null;
    }

    size()
    {
        return this.size;
    }
}

function running_median(list)
{
    // At each point, keep the lesser half of the list in a minheap and the greater half of the list in a maxheap. To get the median, depending on how big 
    // each heap is just pick one of the roots or take the average. O(log(n)) insertion into minheap, O(log(n)) rebalancing of the minheap, O(1) computation of the median.  
}
