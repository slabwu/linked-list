export function test(text) {
    console.log(text);
}

export class linkedList {
    #list;
    #tail;
    #head;
    constructor() {
        this.#list = undefined;
    }

    append(value) {
        if (this.#list === undefined) {
            this.initialise(value);
        } else {
            this.#tail.next = new Node(value, null);
            this.#tail = this.#tail.next;
        }
    }

    prepend(value) {
        if (this.#list === undefined) {
            this.initialise(value);
        } else {
            this.#head = new Node(value, this.#head);
        }
    }

    toString() {
        if (this.#list === undefined) {
            console.log('Unable to print empty list');
            return;
        }

        let output = '';
        let tmp = this.#head;
        while(tmp !== null) {
            output += `( ${tmp.value} ) -> `;
            tmp = tmp.next;
        }
        console.log(output + 'null');
    }

    initialise(value) {
        this.#list = new Node(value, null);
        this.#head = this.#list;
        this.#tail = this.#list;
    }

    get size() {
        let size = 0;
        let tmp = this.#head;
        while(tmp !== null) {
            size++;
            tmp = tmp.next;
        }
        return size;
    }

    get head() {
        return this.#head.value;
    }

    get tail() {
        return this.#tail.value;
    }

    at(index, node = false) {
        let tmp = this.#head;
        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
        }
        return (node === false)? tmp.value : tmp;
    }

    pop() {
        this.#tail = this.at(this.size - 2, true);
        this.#tail.next = null;
    }

    contains(value) {
        let tmp = this.#head;
        while (tmp !== null) {
            if (tmp.value === value) return true; 
            tmp = tmp.next;
        }
        return false;
    }

    find(value) {
        let tmp = this.#head;
        let index = 0;
        while (tmp !== null) {
            if (tmp.value === value) return index; 
            index++;
            tmp = tmp.next;
        }
        return null;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size - 1) {
            this.append(value);
        } else if (index > this.size - 1) {
            console.log('Index does not exist');
            return;
        } else {
            this.at(index - 1, true).next = new Node(value, this.at(index, true));
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.#head = this.#head.next;
        } else if (index === this.size - 1) {
            this.pop();
        } else if (index > this.size - 1) {
            console.log('Index does not exist');
            return;
        } else {
            this.at(index - 1, true).next = this.at(index + 1, true);
        }
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}