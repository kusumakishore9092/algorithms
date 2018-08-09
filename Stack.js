class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    return this.arr.push(data)
  }

  pop() {
    if(this.arr.length === 0) {
      console.log('array is empty');
    }
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr,length - 1]
  }

  displayStack() {
    this.arr.forEach((i) => {
      console.log(i)
    })
  }
}

let stack = new Stack();
stack.pop();
stack.push(10);
stack.push(20);
stack.push(28);
stack.push(2);
stack.displayStack();
stack.pop();
stack.displayStack();
