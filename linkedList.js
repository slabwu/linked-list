export function test(text) {
    console.log(text);
}

export class linkedList {
    #list;
    constructor() {
        this.#list = [];
    }

    get size() {
        return 0;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}