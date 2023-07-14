class HashTable{
    // m = size of hash table
    constructor(size) {
        this.size = size;
        this.table = [];

        for (let i=0; i < this.size; i++){
            this.table.push([]);
        }
    }

    // parse string
    parse(str) {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            result += str.charCodeAt(i);
        }

        return result % this.size;
    }

    // Division Method
    hashDivision(key) {
        return key % this.size;
    }

    // Multiplication Method
    hashMultiplication(key) {
        if (typeof key !== "number"){
            key = this.parse(key);
        }

        const A = (Math.sqrt(5) - 1) / 2;
        return Math.floor(this.size * ((key * A) % 1)); 
    }

    setItems(key, value) {
        let index = this.hashMultiplication(key);
        this.table[index].push({key, value});
    }

    getItems(key) {
        let index = this.hashMultiplication(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key === key){
                return this.table[index][i];
            }
        }

        return null;
    }

    printAll() {
        console.log(this.table);
    }
}


let myHashTable = new HashTable(6);

myHashTable.setItems("white", "#FFFFFF");
myHashTable.setItems("magenta", "#FF00FF");
myHashTable.setItems("red", "#FF0000");

console.log(myHashTable.getItems("red"));      // { key: 'red', value: '#FF0000' }
console.log(myHashTable.getItems("magenta"));  // { key: 'magenta', value: '#FF00FF' }

myHashTable.printAll();

// [
//     [ { key: 'white', value: '#FFFFFF' } ],
//     [],
//     [],
//     [ { key: 'magenta', value: '#FF00FF' } ],
//     [],
//     [ { key: 'red', value: '#FF0000' } ]
// ]