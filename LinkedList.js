class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data);
    let current;
    if(this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }


  insertAt(data, index) {
    if (index > 0 && index > this.size)
      return false;
    else {
      let node = new Node(data);
      let curr, prev;

      if(index === 0) {
        curr =  this.head;
        node.next = curr;
        this.head = node;
      }
      else {
        curr = this.head;
        let i = 0;
        while(i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }

      this.size++;
    }
  }

  removeFrom(index) {
    if (index > 0 && index > this.size)
        return -1;
    else {
      let curr = this.head;
      let prev = curr;
      if(index === 0) {
        this.head = curr.next
      } else {
        let i = 0;
        while(i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }

  removeElement(element) {
    let curr = this.head;
    let prev;

    while(curr.next) {
      if(curr.element === element) {
        if(prev === null) {
          this.head = curr.next;
        } else {
            prev.next = curr.next;
        }
      }
      this.size --;
    }
  }

  printList()
  {
      let curr = this.head;
      let str = "";
      while (curr) {
          str += curr.element + " ";
          curr = curr.next;
      }
      console.log(str);
  }
}


const ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.printList();
