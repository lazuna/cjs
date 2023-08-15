/*
** Queue: It is similar to stack but difference is First In First Out.
**
** Functions:
**	print 	- prints entire queue,
**	enqueue	- pushes an element at last position in queue,
**	dequeue	- removes an element at first position in queue,
**	front	- returns an element from first position,
**	size	- returns size of queue,
**	isEmpty	- returns boolean value if a queue is empty or not.
*/

var Queue = function () {
	var collection = [];

	// Prints complete queue.
	this.print = function() {
		console.log(collection);
	};

	// Pushes one element at the end of queue.
	this.enqueue = function(element) {
		collection.push(element);
	};

	// removes one element at the start of queue.
	this.dequeue = function() {
		return collection.shift();
	};

	// Returns first item from queue.
	this.front = function() {
		return collection[0];
	}

	// Returns queue length.
	this.size = function() {
		return collection.length;
	};

	// Return boolean value, if a queue is empty or not.
	this.isEmpty = function() {
		return (collection.length === 0);
	};

};

var queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
queue.dequeue();
queue.front();
queue.print();
