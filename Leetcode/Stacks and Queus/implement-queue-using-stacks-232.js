var MyQueue = function() {
  this.inbound = [];
  this.outbound = [];
};

MyQueue.createNew = function() {
  return new MyQueue();
}

MyQueue.prototype.push = function(x) {
  this.inbound.push(x);
};

MyQueue.prototype.pop = function() {
  if (this.outbound.length === 0) {
    while (this.inbound.length > 0) {
      this.outbound.push(this.inbound.pop())
    }
  }
  return this.outbound.pop();
};

MyQueue.prototype.peek = function() {
  if (this.outbound.length === 0) {
    while (this.inbound.length > 0) {
      this.outbound.push(this.inbound.pop())
    }
  }
  return this.outbound[this.outbound.length - 1];
};

MyQueue.prototype.empty = function() {
  return this.inbound.length === 0 && this.outbound.length === 0;
};

const q = Object.create(MyQueue).createNew();