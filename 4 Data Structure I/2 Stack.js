class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
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

    pop(){
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
            // 找到倒數第二筆資料
            let currentNode = this.head;
            while (currentNode.next.next !== null){
                currentNode = currentNode.next;
            }

            let temp = currentNode.next;
            currentNode.next = null;
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

let myStack = new Stack();

myStack.push("Mike");
myStack.push("Jason");
myStack.printAll();  // Mike Jason

myStack.pop();
myStack.printAll();  // Mike

myStack.push("Kate");
myStack.printAll();  // Mike Kate