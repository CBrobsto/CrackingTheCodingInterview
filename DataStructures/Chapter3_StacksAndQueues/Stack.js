/* Implementation of a simple Stack using an array */

class Stack {

    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(element) {
        this.items.push(element);
        this.size++;
    }

    pop() {
        this.size--;
        return this.items.pop();
    }

    peek() {
        return this.items[this.size-1];
    }

    isEmpty() {
        if (this.size === 0) {
            return true;
        } else {
            return false;
        }
    }
}

function testStack() {
    const testStack = new Stack();
    console.log('\nisEmpty() :\t\t', testStack.isEmpty());
    for (let i=1; i<10; i++) {
        testStack.push(i);
    }
    console.log('Size of stack is 9:\t', testStack.size === 9);
    console.log('Not Empty:\t\t', !testStack.isEmpty());
    console.log('Pop returns expected:\t', testStack.pop() === 9);
    console.log('Peek returns expected:\t', testStack.peek() === 8, '\n');
}

export default { Stack, testStack };
