/*
 Equality: == allows coercion and === doesn't.
*/

var a = "42";
var b = 42;
console.log(a == b); // true
console.log(a === b); // false

/*
 Use === when one of side has true/false/0/""/[].
 Non-primitive values (array, objects, functions) can't be compared using == or === because these values are held by reference.
*/

var = [1, 2, 3];
var b = [1, 2, 3];
