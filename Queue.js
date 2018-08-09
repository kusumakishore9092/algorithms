class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(data) {
    this.arr.push(data);
  }

  dequeue(data) {

    if(this.arr.length === 0) {
      console.log('Empty array')
      return
    }
    return this.arr.shift();
  }

  top() {
    if(this.arr.length === 0) {
      console.log('Empty array')
      return
    }
    return this.arr[0];
  }

  displayQueue() {
    this.arr.forEach((i) => {
      console.log(i)
    })
  }
 }

let queue = new Queue()
queue.enqueue(10);
queue.enqueue(12);
queue.enqueue(17);
queue.dequeue();
queue.top();
queue.displayQueue();
