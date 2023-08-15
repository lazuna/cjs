/*
** Sets: Sets are collections like arrays except Sets doesn't allow duplicates.
**
** Functions:
**	has	- checks presence of element, returns boolean value.
**	values	- returns all values in Set.
**	add	- adds an element to the Set.
**	remove	- removes an element from the Set.
**	
*/

// Since there's a predefined Set function is available in JS, using Sets
var Sets = function() {

	// The var collection will hold the set.
	var collection = [];

	// Checks for the presence of an element and return true or false.
	this.has = function(element) {
		return (collection.indexOf(element) !== -1);
	};

	// Returns all the values in the Set.
	this.values = function() {
		return collection;
	};

	// Adds an element to the set
	this.add = function(element) {
		if(!this.has(element)) {
			collection.push(element);
			return true;
		}
		return false;
	};

	// Removes an element from a Set.
	this.remove = function(element) {
		if(this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}
		return false;
	};

	// Returns the size of collection.
	this.size = function() {
		return collection.length;
	};

	// Returns the union of two Sets.
	this.union = function(otherSet) {
		var unionSet = new Sets(),
		    firstSet = this.values(),
		    secondSet = otherSet.values();
		firstSet.forEach(function(e){
			unionSet.add(e);
		});
		secondSet.forEach(function(e){
			unionSet.add(e);
		});
		return unionSet;
	};

	// Returns the intersection of two sets as a new Set.
	this.intersection = function(otherSet) {
		var interSectionSet = new Sets(),
		    firstSet = this.values();
		firstSet.forEach(function(e) {
			if(otherSet.has(e)) {
				interSectionSet.add(e);
			}
		});
		return interSectionSet;
	};

	// Returns the difference of two sets as a new Set.
	this.difference = function(otherSet) {
		var differenceSet = new Sets(),
		    firstSet = this.values();
		firstSet.forEach(function(e) {
			if(!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSet;
	};

	// Tests if the Set is a subset if a different Set.
	this.subset = function(otherSet) {
		var firstSet = this.values();
		return firstSet.every(function(value) {
			return otherSet.has(value);
		});
	};
}

var set1 = new Sets();
var set2 = new Sets();
set1.add('a');
set2.add('b');
set2.add('c');
set2.add('d');
set2.add('a');
console.log(set1.subset(set2));
console.log(set1.intersection(set2).values());
console.log(set2.difference(set1).values());

var set3 = new Set();
var set4 = new Set();
set3.add('a');
set4.add('b');
set4.add('a');
set4.add('c');
set4.add('d');
console.log(set4.values());
set4.delete();
console.log(set4.has('a'));
console.log(set4.add('d'));
