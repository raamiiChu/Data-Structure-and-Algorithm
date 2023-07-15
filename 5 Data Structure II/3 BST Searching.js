class Node{
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
        this.path = "";
        this.queue = [];
    }

    // z = 新加入的 Node
    treeInsert(z) {
        let y = null;
        let x = this.root;
        
        // y 會記錄最後停下來的 Node
        while (x !== null) {
            y = x;

            if (z.key < x.key){
                x = x.left;
            }
            else{
                x = x.right;
            }
        }

        // 表示當前 tree 為空值
        if (y === null){
            this.root = z;
        }
        else if (z.key < y.key){
            y.left = z;
        }
        else {
            y.right = z;
        }
    }

    searchRecursively(x, key) {
        if (x === null || key === x.key) {
            return x;
        }

        if (key < x.key){
            return this.searchRecursively(x.left, key);
        }
        else{
            return this.searchRecursively(x.right, key);
        }
    }

    searchIteratively(x, key) {
        while (x !== null && key !== x.key){
            if (key < x.key){
                x = x.left;
            }
            else{
                x = x.right;
            }
        }

        return x
    }

    bftt(n) {
        if (n !== null){
            this.queue.push(n);

            for (let i = 0; i < this.queue.length; i++){
                let currentNode = this.queue[i];
                if (currentNode !== null){
                    if (currentNode.left !== null){
                        this.queue.push(currentNode.left);
                    }
                    if (currentNode.right !== null){
                        this.queue.push(currentNode.right);
                    }
                }
            }
        }
        
    }

    preOrder(n) {
        if (n !== null){
            this.path += n.key + " ";
            this.preOrder(n.left);
            this.preOrder(n.right);
        }
    }

    inOrder(n) {
        if (n !== null){
            this.inOrder(n.left);
            this.path += n.key + " ";
            this.inOrder(n.right);
        }
    }

    postOrder(n) {
        if (n !== null){
            this.postOrder(n.left);
            this.postOrder(n.right);
            this.path += n.key + " ";
        }
    }
}


let bst = new BinarySearchTree();

bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

console.log(bst.searchRecursively(bst.root, -7));  // Node { key: -7, left: null, right: null }
console.log(bst.searchRecursively(bst.root, 10));  // null

console.log(bst.searchIteratively(bst.root, -7));  // Node { key: -7, left: null, right: null }
console.log(bst.searchIteratively(bst.root, 10));  // null