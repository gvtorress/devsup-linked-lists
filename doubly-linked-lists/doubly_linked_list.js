class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  updateNext(pointer) {
    this.next = pointer;
  }

  updatePrev(pointer) {
    this.prev = pointer;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  clear = () => {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
      this.size++
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.size++;
  }
  
  addAtEnd = (elem) => {
    const node = new Node(elem);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.size++;
  }
  
  addAtPosition = (index, elem) => {
    if (index === 0) {
      this.addAtStart(elem);
      return;
    }
    
    if (!this.get(index) || index === this.getSize()) {
      this.addAtEnd(elem);
      return;
    }
    
    const node = new Node(elem);
    let aux = this.getNode(index - 1);
    aux.next.prev = node;
    node.next = aux.next;
    node.prev = aux;
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
    while (current !== null &&i !== index) {
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
      current = current.next
      i++;
    }
    return -1;
  }

  removeHead = () => {
    if (this.isEmpty()) return null;

    const node = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.size--;

    return node;
  }

  removeTail = () => {
    if (this.isEmpty()) return null;

    const node = this.tail;
    this.tail = this.tail.prev;

    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this.size--;

    return node;
  }

  removeAtPosition = (index) => {
    if (this.isEmpty() || !this.get(index)) return null;

    let aux = null;

    if (index === 0) return this.removeHead().value;

    if (index === this.getSize() - 1) return this.removeTail().value;

    aux = this.getNode(index);
    aux.prev.next = aux.next
    aux.next.prev = aux.prev
    this.size--;
    return aux.value;
  }

  remove = (elem) => {
    const index = this.indexOf(elem);
    if (this.isEmpty() || index === -1) return false;
    this.removeAtPosition(index);
    return true;
  }

  reverse = () => {
    const nodeHead = this.head;
    const nodeTail = this.tail;

    this.head = nodeTail;
    this.tail = nodeHead;
    
    let current = nodeHead;
    let aux = null;

    while (current) {
      aux = current.next;
      current.next = current.prev;
      current.prev = aux;
      current = aux;
    }
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

  printDoublyLinkedList = () => {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
