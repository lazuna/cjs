/*
 Server-Side Injection
*/

// Evaluates an infinite loop.
// Example:
eval('while(1){}');

// Example:
var random = Math.floor(Math.random()*100);
eval('var win' + random + ' = window.open("url", "page_' + random + '")');
