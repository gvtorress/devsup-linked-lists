class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  updateNext(pointer) {
    this.next = pointer;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  clear = () => {
    this.head = null;
    this.size = 0;
  }
  
  isEmpty = () => {
    if (this.head === null) return true;
    return false;
  }

  getSize = () => {
    return this.size;
  }

  addAtStart = (elem) => {
    const node = new Node(elem);

    if (this.isEmpty()) {
      this.head = node;
      this.size++;
      return;
    }

    const aux = this.head;
    
    this.head = node;
    node.next = aux;
    this.size++;
  }
  
  addAtEnd = (elem) => {
    const node = new Node(elem);

    if (this.head === null) {
      this.head = node;
      this.size++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  
  addAtPosition = (index, elem) => {
    if (index === 0) {
      this.addAtStart(elem);
      return;
    }
    
    if (!this.get(index)) {
      this.addAtEnd(elem);
      return;
    }
    
    let node = new Node(elem);
    let aux = this.getNode(index - 1);
    node.next = aux.next;
    aux.next = node;
    this.size++;
  }

  get = (index) => {
    const current = this.getNode(index);
    if (current) return current.value;
    return null;
  }

  getNode = (index) => {
    if (index < 0 || index > this.getSize()) return null;

    let current = this.head;
    let i = 0;
    while (i !== index && current !== null) {
      current = current.next;
      i++;
    }
    if (current) return current;
    return null;
  }

  contains = (elem) => {
    const index = this.indexOf(elem);
    if (index === -1) return false;
    return true;
  }

  indexOf = (elem) => {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value === elem) return i;
      current = current.next;
      i++;
    }
    return -1;
  }

  removeAtPosition = (index) => {
    if (this.isEmpty() || !this.get(index)) return null;

    let item = null;
    let aux = null;

    if (index === 0) {
      item = this.head.value;
      this.head = this.head.next;
      this.size--;
      return item;
    }

    if (index === this.getSize() - 1) {
      item = this.get(index);
      aux = this.getNode(index - 1);
      aux.next = null;
      this.size--;
      return item;
    }

    aux = this.getNode(index - 1);
    item = aux.next.value;
    aux.next = aux.next.next;
    this.size--;
    return item;
  }

  remove = (elem) => {
    const index = this.indexOf(elem);
    if (this.isEmpty() || index === -1) return false;
    this.removeAtPosition(index);
    return true;
  }

  toArray = () => {
    let current = this.head;
    let vect = [];

    while (current) {
      vect.push(current.value);
      current = current.next;
    }

    return vect;
  }

  printLinkedList = () => {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
