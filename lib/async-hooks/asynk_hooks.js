/*
 Async Hooks
	Terminology
	Public API
		Overview
			async_hooks.createHook(callbacks)
				Error Handling
				Printing in AsyncHooks callbacks
			asyncHook.enable()
			asyncHook.disable()
			Hook Callbacks
				init(asyncId, type, triggerAsyncId, resource)
					type
					triggerAsyncId
					resource
					Asynchronous context example
				before(asyncId)
				after(asyncId)
				destroy(asyncId)
				promiseResolve(asyncId)
			async_hooks.executionAsyncId()
			async_hooks.triggerAsyncId()
	Promise execution tracking
	JavaScript Embedder API
		Class: AsyncResource
			new AsyncResource(type[, options])
			asyncResource.runInAsyncScope(fn[, thisArg, ...args])
			asyncResource.emitDestroy()
			asyncResource.asyncId()
			asyncResource.triggerAsyncId()

Async Hooks: The async_hooks module provides an API to register callbacks tracking the lifetime of asynchronous resources created inside a Node.js application. It can be accessed using:

	const async_hooks = require('async_hooks');

Terminology: An asynchronous resource represents an object with an associated callback. This callback may be called multiple times, for example, the 'connection' event in net.createServer(), or just a single time like in fs.open(). A resource can also be closed before the callback is called. AsyncHook does not explicitly distinguish between these different cases but will represent them as the abstract concept that is a resource.

If Workers are used, each thread has an independent async_hooks interface, and each thread will use a new set of async IDs.

*/

const async_hooks = require('async_hooks');

// Return the ID of the current execution context.
const eid = async_hooks.executionAsyncId();

// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerAsyncId();

// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook =
    async_hooks.createHook({ init, before, after, destroy, promiseResolve });

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.
asyncHook.enable();

// Disable listening for new asynchronous events.
asyncHook.disable();

//
// The following are the callbacks that can be passed to createHook().
//

// init is called during object construction. The resource may not have
// completed construction when this callback runs, therefore all fields of the
// resource referenced by "asyncId" may not have been populated.
function init(asyncId, type, triggerAsyncId, resource) { }

// Before is called just before the resource's callback is called. It can be
// called 0-N times for handles (e.g. TCPWrap), and will be called exactly 1
// time for requests (e.g. FSReqCallback).
function before(asyncId) { }

// After is called just after the resource's callback has finished.
function after(asyncId) { }

// Destroy is called when an AsyncWrap instance is destroyed.
function destroy(asyncId) { }

// promiseResolve is called only for promise resources, when the
// `resolve` function passed to the `Promise` constructor is invoked
// (either directly or through other means of resolving a promise).
function promiseResolve(asyncId) { }
