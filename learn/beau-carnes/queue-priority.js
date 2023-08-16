/*
** Priority Queues: It is same as normal queue, the difference is setting priority while inserting items.
**
** Functions:
**	print	- Prints entire priority queue,
**	enqueue	- Pushes one element based on priority.
**	dequeue	- Removes one element from front.
**	front	- Returns one item from front.
**	size	- Returns length of priority queue..
**	isEmpty	- Returns boolean value, if priority queue is empty or not.
*/

var PriorityQueue = function() {
	var collection = [];

	// Prints priority queue.
	this.print = function() {
		(console.log(collection));
	}
	
	// Pushes one element based on priority.
	this.enqueue = function(element) {
		if(this.isEmpty()){
			collection.push(element);
		}
		else {
			var added = false;
			for(var i = 0; i < collection.length; i++) {
				// Checking priorities.
				if (element[1] < collection[i][1]) {
					collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if(!added) {
				collection.push(element);
			}
		}
	};

	// Removes one element from front.
	this.dequeue = function() {
		var value = collection.shift();
		return value[0];
	};

	// Prints front item in priority queue.
	this.front = function() {
		return collection[0];
	};

	// Returns collection size.
	this.size = function() {
		return collection.length;
	};

	// Returns boolean vale if priority queue is empty or not.
	this.isEmpty = function() {
		return (collection.length === 0);
	};
};

var pq = new PriorityQueue();
pq.enqueue(['Raghav Dinesh', 2]);
pq.enqueue(['Vijay Mohan', 3]);
pq.enqueue(['Quechua', 1]);
pq.print();
pq.dequeue();
pq.front();
pq.print();
