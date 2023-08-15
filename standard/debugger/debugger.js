/*
 Debugger
	Watchers
	Command reference
		Stepping
		Breakpoints
		Information
		Execution control
		Various
	Advanced Usage
		V8 Inspector Integration for Node.js

 Debugger: Node.js includes an out-of-process debugging utility accessible via a V8 Inspector and built-in debugging client. To use it, start Node.js with the inspect argument followed by the path to the script to debug; a prompt will be displayed indicating successful launch of the debugger:

$ node inspect myscript.js
< Debugger listening on ws://127.0.0.1:9229/80e7a814-7cd3-49fb-921a-2e02228cd5ba
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in myscript.js:1
> 1 (function (exports, require, module, __filename, __dirname) { global.x = 5;
  2 setTimeout(() => {
  3   console.log('world');
debug>

Node.js's debugger client is not a full-featured debugger, but simple step and inspection are possible.

Inserting the statement debugger; into the source code of a script will enable a breakpoint at that position in the code:

*/

global.x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');

/*

$ node inspect debugger.js
< Debugger listening on ws://127.0.0.1:9229/80e7a814-7cd3-49fb-921a-2e02228cd5ba
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in debugger.js:1
> 1 (function (exports, require, module, __filename, __dirname) { global.x = 5;
  2 setTimeout(() => {
  3   debugger;
debug> cont
< hello
break in debugger.js:3
  1 (function (exports, require, module, __filename, __dirname) { global.x = 5;
  2 setTimeout(() => {
> 3   debugger;
  4   console.log('world');
  5 }, 1000);
debug> next
break in debugger.js:4
  2 setTimeout(() => {
  3   debugger;
> 4   console.log('world');
  5 }, 1000);
  6 console.log('hello');
debug> repl
Press Ctrl + C to leave debug repl
> x
5
> 2 + 2
4
debug> next
< world
break in debugger.js:5
  3   debugger;
  4   console.log('world');
> 5 }, 1000);
  6 console.log('hello');
  7
debug> .exit

*/
