import { test, linkedList } from "./linkedList.js"

let example = new linkedList();

example.append('cat');
example.append('dog');
example.append('mouse');
example.prepend('rabbit');
example.prepend('horse');
example.toString();