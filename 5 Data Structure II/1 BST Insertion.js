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
}


let bst = new BinarySearchTree();

bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

console.log(bst);

// BinarySearchTree {
//     root: Node {
//       key: 15,
//       left: Node { key: 6, left: [Node], right: [Node] },
//       right: null
//     }
// }