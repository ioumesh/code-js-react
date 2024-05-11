// LIFO last in first out
// basic stack implementation
class stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    return this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack.pop();
    }
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack[this.size() - 1];
    }
  }
  size() {
    return this.stack.length;
  }
}

const newStack = new stack();
newStack.push(10);
newStack.push(20);
console.log(newStack.peek());
console.log(newStack.pop());
console.log(newStack.peek());

// 1 reverse the order of the  string
// input :"the sky is blue"---->output "blue is the sky"
// input :"a good  example"---->"example good a"
function reverseTheOrder(str) {
  const splitStr = str.split(" ");
  const stack = [];
  for (let s of splitStr) {
    stack.push(s);
  }
  let final = "";
  while (stack.length) {
    const current = stack.pop();
    if (current) {
      final = final + " " + current;
    }
  }
  return final.trim();
}

const input = "the sky is blue";
const input2 = "a good  example";
console.log(reverseTheOrder(input));
console.log(reverseTheOrder(input2));

// check valid parenthesis

function checkValidParenthesis(str) {
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];
  for (let item of str) {
    if (item === "(" || item === "{" || item === "[") {
      stack.push(item);
    } else {
      if (map[stack.pop()] !== item) return -1;
    }
  }

  return true;
}

console.log(checkValidParenthesis("()[]{}"));
