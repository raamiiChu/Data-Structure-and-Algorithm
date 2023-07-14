class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
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

    unshift(value){
        let newNode = new Node(value);

        if (this.length === 0){
            this.head = newNode;
        }
        else {
            // 先設定 Pointer，再存到首位
            newNode.next = this.head;
            this.head = newNode;
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

    insertAt(index, value){
        if (index > this.length || index < 0){
            return null;
        }
        else if (index === 0){
            this.unshift(value);
            return ;
        }
        else if (index === this.length){
            this.push(value);
            return ;
        }
        
        // 找到指定索引值的前一筆資料
        let currentNode = this.head;
        for (let i = 0; i < index-1; i++){
            currentNode = currentNode.next;
        }

        // 先設定 Pointer，再存到指定索引值
        let newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length += 1;
        return ;
    }

    removeAt(index){
        if (index > this.length - 1 || index < 0){
            return null;
        }
        else if (index === 0){
            return this.shift();
        }
        else if (index === this.length - 1){
            return this.pop();
        }

        // 找到指定索引值的前一筆資料
        let currentNode = this.head;
        for (let i = 0; i < index-1; i++){
            currentNode = currentNode.next;
        }

        let temp = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.length -= 1;
        return temp;
    }

    get(index){
        if (index > this.length - 1 || index < 0){
            return null;
        }

        // 找到指定索引值的資料
        let currentNode = this.head;
        for (let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }

        return currentNode.value;
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

let myLinkedList = new LinkedList();

myLinkedList.push("Mike");
myLinkedList.push("James");
myLinkedList.push("Kevin");
console.log(myLinkedList.get(0));  // Mike
console.log(myLinkedList.get(1));  // James
console.log(myLinkedList.get(2));  // Kevin

console.log(myLinkedList.length);  // 3
