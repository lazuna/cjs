/*
 Inspector
	inspector.close()
	inspector.console
	inspector.open([port[, host[, wait]]])
	inspector.url()
	inspector.waitForDebugger()
	Class: inspector.Session
		Constructor: new inspector.Session()
		Event: 'inspectorNotification'
		Event: <inspector-protocol-method>;
		session.connect()
		session.connectToMainThread()
		session.disconnect()
		session.post(method[, params][, callback])
	Example usage
		CPU Profiler
		Heap Profiler

 Inspector: The inspector module provides an API for interacting with the V8 inspector.

 It can be accessed using:

*/ 

const inspector = require('inspector');
