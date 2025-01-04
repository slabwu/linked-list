import { test, linkedList } from "./linkedList.js"

let list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.insertAt("human", 1);
list.toString();