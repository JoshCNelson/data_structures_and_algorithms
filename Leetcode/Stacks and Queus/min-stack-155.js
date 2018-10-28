function MinStack() {
  this.stack = [];
  this.minStack = [];
}

MinStack.createNew = function() {
  return new MinStack()
}

MinStack.prototype.push = function push(x) {
  let min = this.getMin() === undefined ? x : this.getMin()

  this.stack.push(x)
  if (x <= min) {
    this.minStack.push(x)
  } else {
    this.minStack.push(min)
  }
}

MinStack.prototype.pop = function pop() {
  this.minStack.pop()
  return this.stack.pop();
}

MinStack.prototype.top = function top() {
  return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function getMin() {
  console.log(this.minStack)
  return this.minStack[this.minStack.length - 1]
}