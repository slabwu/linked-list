export function test(text) {
    console.log(text);
}

export class linkedList {
    #list;
    constructor() {
        this.#list = undefined;
    }

    append(value) {
        if (this.#list === undefined) {
            this.#list = new Node(value, null);
        } else {
            this.#list.next = new Node(value, null);
        }
    }

    toString() {
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