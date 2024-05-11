class Queue {
  constructor() {
    this.queue = [];
  }

  enque(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.queue.shift();
    }
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  front() {
    if (this.isEmpty) {
      return "no elements";
    } else {
      return this.queue[0];
    }
  }
  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.queue.length; i++) {
      queueString = queueString + this.queue[i] + "";
    }
    return ` Queue--${queueString}`;
  }
}

const newQueue = new Queue();

console.log(newQueue.enque(10));
console.log(newQueue.printQueue());

// Q-1 circular queue implementation
