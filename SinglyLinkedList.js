// Single node, knows its value and next link
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Keeps all the nodes and updates the head and tail of the linked list, Provides interface for working with the list
class SinglyLinkedList {
    // Normalizing an empty list on NEW 
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Checks if first node in the list and creates it otherwise creates a new done and adds it on to the tail
    push(val) {
        // Creating new Node
        var newNode = new Node(val);
        // Checking if list is empty
        if (!this.head) {
            // Pointing head to new Node
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Adding new node to end of list
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // Increases internal length variable
        this.length++;
        // Giving the linked list back
        return this;
    }
}