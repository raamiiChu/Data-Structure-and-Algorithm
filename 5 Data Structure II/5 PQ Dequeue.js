class Node{
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class priorityQueue{
    constructor() {
        this.values = [];
    }
    
    enqueue(value, priority) {
        let newNode = new Node(value, priority);

        // check if PQ is empty
        if (this.values.length === 0){
            this.values.push(newNode);
            return true;
        }

        this.values.push(newNode);
        let newIndex = this.values.length - 1;
        let parentIndex = Math.floor((newIndex - 1) / 2);
        while (parentIndex >= 0 && 
            this.values[newIndex].priority > this.values[parentIndex].priority
        ) {
            // swap parent & child
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[newIndex];
            this.values[newIndex] = temp;

            // update index number
            newIndex = parentIndex;
            parentIndex = Math.floor((newIndex - 1) / 2);
        }
    }

    dequeue() {
        if (this.values.length === 0) {
            return null;
        }

        if (this.values.length === 1) {
            let removeNode = this.values.pop();
            return removeNode;
        }
        
        // swap 2 nodes
        let temp = this.values.pop();
        this.values.push(this.values[0]);
        this.values[0] = temp;

        // pop
        let removeNode = this.values.pop();

        this.maxHeapify(0);

        return removeNode;
    }

    maxHeapify(i) {
        let largest;
        let l = i * 2 + 1;
        let r = i * 2 + 2;

        // 比較最大值 (i, l, r)
        if (l <= this.values.length - 1 && 
            this.values[l].priority > this.values[i].priority
        ){
            largest = l;
        }
        else{
            largest = i;
        }

        if (r <= this.values.length - 1 && 
            this.values[r].priority > this.values[largest].priority
        ){
            largest = r;
        }

        // 父節點非最大值則交換，並執行底下的子樹
        if (largest !== i){
            let temp = this.values[largest];
            this.values[largest] = this.values[i];
            this.values[i] = temp;
            this.maxHeapify(largest);
        }
    }
}


let pq = new priorityQueue();

pq.enqueue("Eat Breakfast", 5);
pq.enqueue("Learn JS", 2);
pq.enqueue("Learn Java", 1);
pq.enqueue("Learn C++", 4);
pq.enqueue("Learn Python", 7);

console.log(pq);
// priorityQueue {
//     values: [
//       Node { value: 'Learn Python', priority: 7 },
//       Node { value: 'Eat Breakfast', priority: 5 },
//       Node { value: 'Learn Java', priority: 1 },
//       Node { value: 'Learn JS', priority: 2 },
//       Node { value: 'Learn C++', priority: 4 }
//     ]
// }

console.log(pq.dequeue());  // Node { value: 'Learn Python', priority: 7 }

console.log(pq);
// priorityQueue {
//     values: [
//       Node { value: 'Eat Breakfast', priority: 5 },
//       Node { value: 'Learn C++', priority: 4 },
//       Node { value: 'Learn Java', priority: 1 }
//     ]
// }