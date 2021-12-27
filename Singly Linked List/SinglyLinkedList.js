// Single node, knows its value and next link
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Keeps all the nodes and updates the head and tail of the linked list.
// Provides interface for working with the list
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
    let newNode = new Node(val);
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
  // Removes the last node in the list and returns it. 
  // Retuns undefined if the list is empty
  pop() {
    // Returning if there is nothing in the list
    if (!this.head) return undefined
    // Current node
    let current = this.head
    // New tail node
    let newTail = current
    // Looping over each node updating current and newTail until the end of the list
    while (current.next) {
      // makes the new tail the current node
      newTail = current
      // Makes the current the next node
      current = current.next
    }
    // Updating the tail to be the new tail
    this.tail = newTail
    // Setting the new tails next to null
    this.tail.next = null
    // Decrementing the internal length
    this.length--
    // Checks if list is empty and sets head and tail to null
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    // Returns the removed node
    return current
  }
  // Shift removes from the begging of the list
  // Returns undefined if list is empty
  shift() {
    // Checks if head is null
    if (!this.head) return undefined
    // Pointer to current head
    let currentHead = this.head
    // Updating head to next node
    this.head = currentHead.next
    // // Decrementing the internal length
    this.length--
    // Checks if list is empty and sets head and tail to null
    if (this.length === 0) {
      this.tail = 0
    }
    // Returns the removed node
    return currentHead
  }
  // Adds a node to the beginning of the list
  unshift(val) {
    // New node with value passed in 
    let newNode = new Node(val);
    // Case if there is no nodes in the list
    if (!this.head) {
      // Points head and tail to new node
      this.head = newNode;
      this.tail = this.head;
      // Otherwise add the new node to the beginning of the list
    } else {
      // Updates the previuous head
      newNode.next = this.head;
      this.head = newNode;
    }
    // Increases internal length variable
    this.length++;
    // Returns list
    return this;
  }
  // Gets node from index position
  get(index) {
    // Checking for out of bounds
    if (index < 0 || index >= this.length) return null;
    // Internal counter
    var counter = 0;
    // Current head
    var current = this.head;
    // Looping over each node ending when we find the correct index
    while (counter !== index) {
      // Setting current to the next node
      current = current.next;
      // Increasing counter by one
      counter++;
    }
    // Returning the found node
    return current;
  }
  // Sets the passed in value on the node matching the passed in index
  // Returns false if mathing node is not found
  set(index, val) {
    // Using built in get method to retrieve node by index
    let foundNode = this.get(index);
    // Checking if a node was found
    if (foundNode) {
      // Setting the found nodes val to the passed in value
      foundNode.val = val;
      // Returning true if node was updated
      return true;
    }
    // No node was found
    return false;
  }
}

module.exports = SinglyLinkedList