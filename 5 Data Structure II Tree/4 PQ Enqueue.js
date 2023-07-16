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