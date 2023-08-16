/*
 Events
	Passing arguments and this to listeners
	Asynchronous vs. Synchronous
	Handling events only once
	Error events
	Capture Rejections of Promises
	Class: EventEmitter
		Event: 'newListener'
		Event: 'removeListener'
		EventEmitter.listenerCount(emitter, eventName)
		EventEmitter.defaultMaxListeners
		emitter.addListener(eventName, listener)
		emitter.emit(eventName[, ...args])
		emitter.eventNames()
		emitter.getMaxListeners()
		emitter.listenerCount(eventName)
		emitter.listeners(eventName)
		emitter.off(eventName, listener)
		emitter.on(eventName, listener)
		emitter.once(eventName, listener)
		emitter.prependListener(eventName, listener)
		emitter.prependOnceListener(eventName, listener)
		emitter.removeAllListeners([eventName])
		emitter.removeListener(eventName, listener)
		emitter.setMaxListeners(n)
		emitter.rawListeners(eventName)
		emitter[Symbol.for('nodejs.rejection')](err, eventName[, ...args])
	events.once(emitter, name)
	events.captureRejections
	events.captureRejectionSymbol
	events.on(emitter, eventName)

 Events: Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

 For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; a stream emits an event whenever data is available to be read.

 All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

 When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.

 The following example shows a simple EventEmitter instance with a single listener. The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.

*/

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');
