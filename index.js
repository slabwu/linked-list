import { test, linkedList } from "./linkedList.js"

let list = new linkedList();

list.append('cat');
list.append('dog');
list.append('mouse');
list.prepend('rabbit');
list.prepend('horse');
list.toString();

test(list.size);
test(list.head);
test(list.tail);
test(list.at(2));