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

bst.preOrder(bst.root);
console.log(bst.path);  // 15 6 5 1 -7 3 13

// bst.inOrder(bst.root);
// console.log(bst.path);  // -7 1 3 5 6 13 15

// bst.postOrder(bst.root);
// console.log(bst.path);  // -7 3 1 5 13 6 15 

bst.bftt(bst.root);
console.log(bst.queue);

// [
//     Node {
//       key: 15,
//       left: Node { key: 6, left: [Node], right: [Node] },
//       right: null
//     },
//     Node {
//       key: 6,
//       left: Node { key: 5, left: [Node], right: null },
//       right: Node { key: 13, left: null, right: null }
//     },
//     Node {
//       key: 5,
//       left: Node { key: 1, left: [Node], right: [Node] },
//       right: null
//     },
//     Node { key: 13, left: null, right: null },
//     Node {
//       key: 1,
//       left: Node { key: -7, left: null, right: null },
//       right: Node { key: 3, left: null, right: null }
//     },
//     Node { key: -7, left: null, right: null },
//     Node { key: 3, left: null, right: null }
// ]