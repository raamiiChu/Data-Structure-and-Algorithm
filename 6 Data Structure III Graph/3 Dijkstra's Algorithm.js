class Node{
    constructor(value) {
        this.value = value;
        this.visited = false;
        this.edges = [];
        this.distanceFromStartNode = Infinity;
        this.previous = null;
    }

    addEdges(edge) {
        this.edges.push(edge);
    }
}

class Edge {
    constructor(node, weight) {
        this.node = node;
        this.weight = weight;
    }
}

// Create Nodes
let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");

// Create Edges
A.addEdges(new Edge(B, 2));
A.addEdges(new Edge(C, 2));
B.addEdges(new Edge(A, 2));
B.addEdges(new Edge(D, 1));
B.addEdges(new Edge(E, 4));
C.addEdges(new Edge(A, 2));
C.addEdges(new Edge(D, 1));
C.addEdges(new Edge(F, 2));
D.addEdges(new Edge(B, 1));
D.addEdges(new Edge(C, 1));
D.addEdges(new Edge(E, 2));
D.addEdges(new Edge(F, 3));
E.addEdges(new Edge(B, 4));
E.addEdges(new Edge(D, 2));
E.addEdges(new Edge(F, 1));
F.addEdges(new Edge(C, 2));
F.addEdges(new Edge(D, 3));
F.addEdges(new Edge(E, 1));


class MinHeap{
    constructor() {
        this.values = [];
    }

    enqueue(node) {
        // check if queue is empty
        if (this.values.length === 0){
            this.values.push(node);
            return true;
        }

        this.values.push(node);
        let newIndex = this.values.length - 1;
        let parentIndex = Math.floor((newIndex - 1) / 2);
        while (parentIndex >= 0 && 
            this.values[newIndex].distanceFromStartNode < this.values[parentIndex].distanceFromStartNode
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

        this.minHeapify(0);

        return removeNode;
    }

    minHeapify(i) {
        let smallest;
        let l = i * 2 + 1;
        let r = i * 2 + 2;

        // 比較最大值 (i, l, r)
        if (l <= this.values.length - 1 && 
            this.values[l].distanceFromStartNode < this.values[i].distanceFromStartNode
        ){
            smallest = l;
        }
        else{
            smallest = i;
        }

        if (r <= this.values.length - 1 && 
            this.values[r].distanceFromStartNode > this.values[smallest].distanceFromStartNode
        ){
            smallest = r;
        }

        // 父節點非最大值則交換，並執行底下的子樹
        if (smallest !== i){
            let temp = this.values[smallest];
            this.values[smallest] = this.values[i];
            this.values[i] = temp;
            this.minHeapify(smallest);
        }
    }

    // distanceFromStartNode 改變，則在 MinHeap 的位置也要改
    decreasePriority(node) {
        let newIndex = this.values.indexOf(node);
        let parentIndex = Math.floor((newIndex - 1) / 2);
        while (parentIndex >= 0 && 
            this.values[newIndex].distanceFromStartNode < this.values[parentIndex].distanceFromStartNode
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

function Dijkstra(node) {
    let minHeap = new MinHeap();
    node.distanceFromStartNode = 0;
    node.visited = true;

    minHeap.enqueue(A);
    minHeap.enqueue(B);
    minHeap.enqueue(C);
    minHeap.enqueue(D);
    minHeap.enqueue(E);
    minHeap.enqueue(F);

    let currentNode = minHeap.dequeue();
    while (minHeap.values.length > 0){
        // min heap 最小值的 node => currentNode
        // node 鄰居中沒有拜訪過的 node => neighborNode
        // neighborNode.distance > currentNode.distance + weight
        // neighborNode.distance = currentNode.distance + weight
        // neighborNode.previous = currentNode
        // min heap decrease neighborNode's priority

        currentNode.edges.forEach((edge) => {
            let neighborNode = edge.node;
            if (!neighborNode.visited){
                let distance1 = neighborNode.distanceFromStartNode;
                let distance2 = currentNode.distanceFromStartNode;
                let weight = edge.weight;

                if (distance1 > distance2 + weight){
                    neighborNode.distanceFromStartNode = distance2 + weight;
                    neighborNode.previous = currentNode;
                    minHeap.decreasePriority(neighborNode);
                }
            }
        })

        currentNode = minHeap.dequeue();
        currentNode.visited = true;
    }
}

// 0 null
Dijkstra(A);
console.log("A's information");
console.log(A.distanceFromStartNode);
console.log(A.previous);

// 2 A
console.log("B's Info");
console.log(B.distanceFromStartNode);
console.log(B.previous.value);

// 2 A
console.log("C's Info");
console.log(C.distanceFromStartNode);
console.log(C.previous.value);

// 3 B
console.log("D's Info");
console.log(D.distanceFromStartNode);
console.log(D.previous.value);

// 5 D
console.log("E's Info");
console.log(E.distanceFromStartNode);
console.log(E.previous.value);

// 4 C
console.log("F's Info");
console.log(F.distanceFromStartNode);
console.log(F.previous.value);