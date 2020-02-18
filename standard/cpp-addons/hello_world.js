/*
 C++ Addons
	Hello world
		Context-aware addons
			Worker support
		Building
		Linking to Node.js' own dependencies
		Loading Addons using require()
	Native Abstractions for Node.js
	N-API
	Addon examples
		Function arguments
		Callbacks
		Object factory
		Function factory
		Wrapping C++ objects
		Factory of wrapped objects
		Passing wrapped objects around

 C++ Addons: Addons are dynamically-linked shared objects written in C++. The require() function can load Addons as ordinary Node.js modules. Addons provide an interface between JavaScript and C/C++ libraries.

 There are three options for implementing Addons: N-API, nan, or direct use of internal V8, libuv and Node.js libraries. Unless you need direct access to functionality which is not exposed by N-API, use N-API.

Hello world: This "Hello world" example is a simple Addon, written in C++, that is the equivalent of the following JavaScript code:
*/

module.exports.hello = () => 'world';
