class HashTable{
    // m = size of hash table
    constructor(size) {
        this.size = size;
        this.table = [];

        for (let i=0; i < this.size; i++){
            this.table.push([]);
        }
    }

    // Division Method
    hashDivision(key) {
        return key % this.size;
    }

    // Multiplication Method
    hashMultiplication(key) {
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

myHashTable.setItems(11424, "Mike");
myHashTable.setItems(6254, "James");
myHashTable.setItems(4171, "Drake");
myHashTable.setItems(554, "Kevin");

console.log(myHashTable.getItems(11424));  // { key: 11424, value: 'Mike' }
console.log(myHashTable.getItems(14000));  // null

myHashTable.printAll();

// [
//     [],
//     [ { key: 6254, value: 'James' } ],
//     [ { key: 11424, value: 'Mike' }, { key: 554, value: 'Kevin' } ],
//     [],
//     [ { key: 4171, value: 'Drake' } ],
//     []
// ]