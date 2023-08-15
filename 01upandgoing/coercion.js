/*
 Explicit coercion.
*/
var a = "42";
var b = Number(a);

a; // "42"
b; // 42

/*
 Implicit coercion.
*/
var a = "42";
var b = a * 1; // coerced to 42 number.
console.log(b); // 42
