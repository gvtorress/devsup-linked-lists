import { DoublyLinkedList } from "./doubly_linked_list.js";

const list = new DoublyLinkedList();

list.addAtEnd(20);
list.addAtEnd(9);
list.addAtEnd(86);
list.addAtEnd(-2);
list.addAtEnd(16);

// console.log(`Tamanho da lista: ${list.getSize()}`)
// list.printDoublyLinkedList();

// console.log("Clearing list...");
// list.clear();

// console.log(`Tamanho da lista: ${list.getSize()}`)
// list.printDoublyLinkedList();

list.addAtPosition(2, 23)
list.removeHead();
list.removeTail();
list.removeAtPosition(2)
list.reverse();
list.printDoublyLinkedList();
