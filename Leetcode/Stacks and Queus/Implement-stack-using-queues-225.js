var MyStack = function() {
  this.queue1 = [];
  this.queue2 = [];
};

MyStack.createNew = function() {
  return new MyStack();
}

MyStack.prototype.push = function(x) {
  this.queue1.unshift(x);
};

MyStack.prototype.pop = function() {
  while (this.queue1.length > 1) {
    this.queue2.unshift(this.queue1.pop())
  }

  let outbound = this.queue1.pop()
  let temp = this.queue1;
  this.queue1 = this.queue2;
  this.queue2 = temp;
  
  return outbound;
};

MyStack.prototype.top = function() {
  while (this.queue1.length > 1) {
    this.queue2.unshift(this.queue1.pop())
  }
  
  let outbound = this.queue1.pop();
  this.queue2.unshift(outbound);
  let temp = this.queue1;
  this.queue1 = this.queue2;
  this.queue2 = temp;
  
  return outbound;
};

MyStack.prototype.empty = function() {
  return this.queue1.length === 0 && this.queue2.length === 0;
};