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
            console.log(`Unable to print empty list`);
            return;
        }

        let output = '';
        let tmp = this.#head;
        while(tmp !== null) {
            output += `( ${tmp.value} ) -> `;
            tmp = tmp.next;
        }
        output += 'null';
        console.log(output);
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

    at(index) {
        let tmp = this.#head;
        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
        }
        return tmp.value;
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
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}