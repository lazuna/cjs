/*
** Stacks.
** Functions:
**      push    - adds an element at last position,
**      pop     - removes an element from last position,
**      peek    - peeks an element,
**      length  - determines length of stack/array.
*/

// Creates a stack.
var Stack = function() {
	this.count = 0;
	this.storage = {};

	// Adds a value onto the end of the stack
	this.push = function(value) {
		this.storage[this.count] = value;
		this.count++;
	}

	// Removes and returns the value at the end of the stack.
	this.pop = function() {
		if(this.count === 0) {
			return undefined;
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	// Returns count/size of stack.
	this.size = function() {
		return this.count;
	}

	// Returns the value at the end of the stack.
	this.peek = function() {
		return this.storage[this.count - 1];
	}
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push('test');
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
stack.push('test123');
console.log(stack.peek());
console.log(stack.size());
