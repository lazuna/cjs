/*
 Values and types:
	- String (string)
	- Number (number)
	- Boolean (boolean)
	- Null and Undefined (null and undefined)
	- Object (object)
	- Symbol (symbol)
*/.
var a;
typeof a; // "undefined"

a = "hello world";
typeof a; // "string"

a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object" * Bug *

a = undefined;
typeof a; // "undefined"

a = { b: "c" };
typeof a; // "object"

/*
 Objects
*/
var obj = {
	a: "hello world",
	b: 42,
	c: true
};

// dot notation.
obj.a; // "hello world"
obj.b; // 42
obj.c; // true

// bracket notation.
obj["a"]; // "hello world"
obj["b"]; // 42
obj["c"]; // true

/*
 Arrays
*/
var arr = [
	"hello world",
	42,
	true
];

arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true

typeof arr; // "object"

/*
 Functions
*/
function foo() {
	return 42;
}

foo.bar = "hello world";

typeof foo; // "function"
typeof foo(); // "number"
typeof foo.bar; // "string"


