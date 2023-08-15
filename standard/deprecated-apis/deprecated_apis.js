/*
 Deprecated APIs
	Revoking deprecations
	List of Deprecated APIs
		DEP0001: http.OutgoingMessage.prototype.flush
		DEP0002: require('_linklist')
		DEP0003: _writableState.buffer
		DEP0004: CryptoStream.prototype.readyState
		DEP0005: Buffer() constructor
		DEP0006: child_process options.customFds
		DEP0007: Replace cluster worker.suicide with worker.exitedAfterDisconnect
		DEP0008: require('constants')
		DEP0009: crypto.pbkdf2 without digest
		DEP0010: crypto.createCredentials
		DEP0011: crypto.Credentials
		DEP0012: Domain.dispose
		DEP0013: fs asynchronous function without callback
		DEP0014: fs.read legacy String interface
		DEP0015: fs.readSync legacy String interface
		DEP0016: GLOBAL/root
		DEP0017: Intl.v8BreakIterator
		DEP0018: Unhandled promise rejections
		DEP0019: require('.') resolved outside directory
		DEP0020: Server.connections
		DEP0021: Server.listenFD
		DEP0022: os.tmpDir()
		DEP0023: os.getNetworkInterfaces()
		DEP0024: REPLServer.prototype.convertToContext()
		DEP0025: require('sys')
		DEP0026: util.print()
		DEP0027: util.puts()
		DEP0028: util.debug()
		DEP0029: util.error()
		DEP0030: SlowBuffer
		DEP0031: ecdh.setPublicKey()
		DEP0032: domain module
		DEP0033: EventEmitter.listenerCount()
		DEP0034: fs.exists(path, callback)
		DEP0035: fs.lchmod(path, mode, callback)
		DEP0036: fs.lchmodSync(path, mode)
		DEP0037: fs.lchown(path, uid, gid, callback)
		DEP0038: fs.lchownSync(path, uid, gid)
		DEP0039: require.extensions
		DEP0040: punycode module
		DEP0041: NODE_REPL_HISTORY_FILE environment variable
		DEP0042: tls.CryptoStream
		DEP0043: tls.SecurePair
		DEP0044: util.isArray()
		DEP0045: util.isBoolean()
		DEP0046: util.isBuffer()
		DEP0047: util.isDate()
		DEP0048: util.isError()
		DEP0049: util.isFunction()
		DEP0050: util.isNull()
		DEP0051: util.isNullOrUndefined()
		DEP0052: util.isNumber()
		DEP0053 util.isObject()
		DEP0054: util.isPrimitive()
		DEP0055: util.isRegExp()
		DEP0056: util.isString()
		DEP0057: util.isSymbol()
		DEP0058: util.isUndefined()
		DEP0059: util.log()
		DEP0060: util._extend()
		DEP0061: fs.SyncWriteStream
		DEP0062: node --debug
		DEP0063: ServerResponse.prototype.writeHeader()
		DEP0064: tls.createSecurePair()
		DEP0065: repl.REPL_MODE_MAGIC and NODE_REPL_MODE=magic
		DEP0066: OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames
		DEP0067: OutgoingMessage.prototype._renderHeaders
		DEP0068: node debug
		DEP0069: vm.runInDebugContext(string)
		DEP0070: async_hooks.currentId()
		DEP0071: async_hooks.triggerId()
		DEP0072: async_hooks.AsyncResource.triggerId()
		DEP0073: Several internal properties of net.Server
		DEP0074: REPLServer.bufferedCommand
		DEP0075: REPLServer.parseREPLKeyword()
		DEP0076: tls.parseCertString()
		DEP0077: Module._debug()
		DEP0078: REPLServer.turnOffEditorMode()
		DEP0079: Custom inspection function on Objects via .inspect()
		DEP0080: path._makeLong()
		DEP0081: fs.truncate() using a file descriptor
		DEP0082: REPLServer.prototype.memory()
		DEP0083: Disabling ECDH by setting ecdhCurve to false
		DEP0084: requiring bundled internal dependencies
		DEP0085: AsyncHooks Sensitive API
		DEP0086: Remove runInAsyncIdScope
		DEP0089: require('assert')
		DEP0090: Invalid GCM authentication tag lengths
		DEP0091: crypto.DEFAULT_ENCODING
		DEP0092: Top-level this bound to module.exports
		DEP0093: crypto.fips is deprecated and replaced.
		DEP0094: Using assert.fail() with more than one argument.
		DEP0095: timers.enroll()
		DEP0096: timers.unenroll()
		DEP0097: MakeCallback with domain property
		DEP0098: AsyncHooks Embedder AsyncResource.emitBefore and AsyncResource.emitAfter APIs
		DEP0099: async context-unaware node::MakeCallback C++ APIs
		DEP0100: process.assert()
		DEP0101: --with-lttng
		DEP0102: Using noAssert in Buffer#(read|write) operations.
		DEP0103: process.binding('util').is[...] typechecks
		DEP0104: process.env string coercion
		DEP0105: decipher.finaltol
		DEP0106: crypto.createCipher and crypto.createDecipher
		DEP0107: tls.convertNPNProtocols()
		DEP0108: zlib.bytesRead
		DEP0109: http, https, and tls support for invalid URLs
		DEP0110: vm.Script cached data
		DEP0111: process.binding()
		DEP0112: dgram private APIs
		DEP0113: Cipher.setAuthTag(), Decipher.getAuthTag()
		DEP0114: crypto._toBuf()
		DEP0115: crypto.prng(), crypto.pseudoRandomBytes(), crypto.rng()
		DEP0116: Legacy URL API
		DEP0117: Native crypto handles
		DEP0118: dns.lookup() support for a falsy hostname
		DEP0119: process.binding('uv').errname() private API
		DEP0120: Windows Performance Counter Support
		DEP0121: net._setSimultaneousAccepts()
		DEP0122: tls Server.prototype.setOptions()
		DEP0123: setting the TLS ServerName to an IP address
		DEP0124: using REPLServer.rli
		DEP0125: require('_stream_wrap')
		DEP0126: timers.active()
		DEP0127: timers._unrefActive()
		DEP0128: modules with an invalid main entry and an index.js file
		DEP0129: ChildProcess._channel
		DEP0130: Module.createRequireFromPath()
		DEP0131: Legacy HTTP parser
		DEP0132: worker.terminate() with callback
		DEP0133: http connection
		DEP0134: process._tickCallback
		DEP0136: http finished

Deprecated APIs: Node.js may deprecate APIs for any of the following reasons:
	Use of the API is unsafe.
	An improved alternative API is available.
	Breaking changes to the API are expected in a future major release.

Node.js utilizes three kinds of Deprecations:
	Documentation-only
	Runtime
	End-of-Life

A Documentation-only deprecation is one that is expressed only within the Node.js API docs. These generate no side-effects while running Node.js. Some Documentation-only deprecations trigger a runtime warning when launched with --pending-deprecation flag (or its alternative, NODE_PENDING_DEPRECATION=1 environment variable), similarly to Runtime deprecations below. Documentation-only deprecations that support that flag are explicitly labeled as such in the list of Deprecated APIs.

A Runtime deprecation will, by default, generate a process warning that will be printed to stderr the first time the deprecated API is used. When the --throw-deprecation command-line flag is used, a Runtime deprecation will cause an error to be thrown.

An End-of-Life deprecation is used when functionality is or will soon be removed from Node.js.

Revoking deprecations: Occasionally, the deprecation of an API may be reversed. In such situations, this document will be updated with information relevant to the decision. However, the deprecation identifier will not be modified.

*/
