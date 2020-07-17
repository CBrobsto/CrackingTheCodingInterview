const LinkedList = require('linked-list');

const object1 = {
    test: 'It works!'
};
const object2 = {
    test: 'It really works!'
};

const item1 = new LinkedList.Item();
const item2 = new LinkedList.Item();

item1.payload = object1;
item2.payload = object2;

const list = new LinkedList(item1, item2);

console.log(list.head.payload.test, list.head.next.payload.test);
