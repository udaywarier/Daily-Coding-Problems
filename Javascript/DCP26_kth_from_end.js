class Node
{
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
}

class LinkedList
{
    constructor(head = null)
    {
        this.head = head;
    }

    add(data)
    {
        let to_add = new Node(data);

        let curr = this.head;
        let prev = null;

        if(this.head === null)
        {
            this.head = to_add;  
        }

        else
        {
            while(curr !== null)
            {
                prev = curr;
                curr = curr.next;
            }

            prev.next = to_add;
        }
    }

    print()
    {
        let curr = this.head;
        let list = '';

        while(curr.next !== null)
        {
            list += curr.data + '->'
            curr = curr.next;
        }

        list += curr.data;
        console.log(list);
    }

    // Maintain two pointers, spaced apart by k. Once the first pointer reaches the end of the list, we know the second pointer is at the node we want to delete.
    remove_kth_from_end(k)
    {
        let counter = 0;
        let lookahead = this.head;

        while(counter++ < k)
        {
            lookahead = lookahead.next;
        }

        if(lookahead === null)
        {
            this.head = this.head.next;
        }

        else
        {
            let find_kth = this.head;

            while(lookahead.next !== null)
            {
                lookahead = lookahead.next;
                find_kth = find_kth.next;
            }

            find_kth.next = find_kth.next.next;
        }
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print(); // 1->2->3->4->5

list.remove_kth_from_end(3); 
list.print(); // 1->2->4->5

list.add(3); // 1->2->4->5->3
list.remove_kth_from_end(2);
list.print(); // 1->2->4->3

list.add(5); // 1->2->4->3->5
list.remove_kth_from_end(4);
list.print(); // 1->4->3->5

list.add(2); // 1->4->3->5->2
list.remove_kth_from_end(1);
list.print(); // 1->4->3->5

list.add(2); // 1->4->3->5->2
list.remove_kth_from_end(5);
list.print(); // 4->3->5->2
