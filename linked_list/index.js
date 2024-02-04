class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToTheEnd(value) {
        let node = new Node(value);
        if(this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
        this.length++;
    }

    insertInPosition(position, value) {
        if(position < 0 || position > this.length) {
            return 'Incorect position value';
        }

        let node = new Node(value);

        if(position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;
            
            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = node;
            node.next = current;
        }
        this.length++;
    }

    getNodeByPosition(position) {
        if(position < 0 || position > this.length) {
            return "Incorrect position value";
        }

        let current = this.head;
        let index = 0;

        while(index < current) {
            current = current.next;
            index++;
        }

        return current.value;
    }

    removeFromPosition(position) {
        if(position < 0 || position > this.length) {
            return "Incorrect position value";
        }

        let current = this.head;

        if(position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }
        this.length--;
        return current.value;
    }

    print() {
        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    getIndexOf(value) {
        let current = this.head;
        let index = 0;

        while(current) {
            if(current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        
        return -1;
    }

    removeElementByValue(value) {
        return this.removeFromPosition(this.getIndexOf(value));
    }

    isEmpty() {
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }
}

let list = new LinkedList();
list.addToTheEnd(10);
list.addToTheEnd(10);
list.addToTheEnd(10);
list.addToTheEnd(10);
list.print();
list.removeElementByValue(10);
list.removeFromPosition(1)
console.log("-------")
list.print();
console.log(list.isEmpty());
console.log(list.getLength());
// console.log(list.getIndexOf(110))