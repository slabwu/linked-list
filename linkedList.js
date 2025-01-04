export function test(text) {
    console.log(text);
}

export class linkedList {
    #list;
    #tail;
    constructor() {
        this.#list = undefined;
    }

    append(value) {
        if (this.#list === undefined) {
            this.#list = new Node(value, null);
            this.#tail = this.#list;
        } else {
            this.#tail.next = new Node(value, null);
            this.#tail = this.#tail.next;
        }
    }

    toString() {
        if (this.#list === undefined) {
            console.log(`Unable to print empty list`);
            return;
        }

        let output = '';
        let tmp = this.#list;

        while(tmp !== null) {
            output += `( ${tmp.value} ) -> `;
            tmp = tmp.next
        }
        output += 'null';
        console.log(output);
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}