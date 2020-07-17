/* Javascript does not have a built-in LinkedList data 
structure so the npm package 'linked-list' will be used. 
https://www.npmjs.com/package/linked-list */
const LinkedList = require('linked-list');

/* 'Remove duplicate nodes from an unsorted Linked List'
 * This implementation moves forward in the list
 * Use a reference to the head to process the whole list
 * Begin at any node, skipping the ones before it (inclusive) 
 * Requires the name of the key used in the LinkedListNode to hold data */
function removeDups(linkedListNode, payloadKey) {
    const buffer = new Set();
    let currentNode = linkedListNode;
    // Iterate through the LinkedList
    while (currentNode != null) {
        // add non-duplicate payload to the buffer and increment
        if (!buffer.has(currentNode.payloadKey)) {
            buffer.add(currentNode.payloadKey);
            currentNode = currentNode.next;
        } else {
            // Remove the duplicate and increment
            currentNode.detach();
            currentNode = currentNode.next;
        }
    }
}


/* TESTING */
const object1 = {
    test: 'It works!'
};
const object2 = {
    test: 'It really works!'
};
const object3 = {
    test: 'It works!'
};

const item1 = new LinkedList.Item();
const item2 = new LinkedList.Item();
const item3 = new LinkedList.Item();

item1.payload = object1;
item2.payload = object2;
item3.payload = object3;

const list = new LinkedList(item1, item2, item3);

console.log('Initial size:\t', list.size);
removeDups(list.head, 'payload');
console.log('Final size:\t', list.size);
