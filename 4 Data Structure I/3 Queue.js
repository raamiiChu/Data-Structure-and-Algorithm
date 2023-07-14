class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
        }
        else{
            // 找到最後一筆資料
            let currentNode = this.head;
            while (currentNode.next !== null){
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.length += 1;
    }

    shift(){
        if (this.length === 0){
            return null;
        }
        else if (this.length === 1){
            let temp = this.head;
            this.head = null;
            this.length = 0;
            return temp;
        }
        else{
            let temp = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return temp;
        }
    }

    printAll(){
        if (this.length === 0){
            console.log("nothing");
            return ;
        }

        let currentNode = this.head;
        while (currentNode !== null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let myQueue = new Queue();

myQueue.push("Mike");
myQueue.push("Jason");
myQueue.printAll();  // Mike Jason

myQueue.shift();
myQueue.printAll();  // Jason

myQueue.push("Kate");
myQueue.printAll();  // Jason Kate