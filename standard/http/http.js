/*

 HTTP
	Class: http.Agent
		new Agent([options])
		agent.createConnection(options[, callback])
		agent.keepSocketAlive(socket)
		agent.reuseSocket(socket, request)
		agent.destroy()
		agent.freeSockets
		agent.getName(options)
		agent.maxFreeSockets
		agent.maxSockets
		agent.requests
		agent.sockets
	Class: http.ClientRequest
		Event: 'abort'
		Event: 'connect'
		Event: 'continue'
		Event: 'information'
		Event: 'response'
		Event: 'socket'
		Event: 'timeout'
		Event: 'upgrade'
		request.abort()
		request.aborted
		request.connection
		request.end([data[, encoding]][, callback])
		request.finished
		request.flushHeaders()
		request.getHeader(name)
		request.maxHeadersCount
		request.path
		request.removeHeader(name)
		request.reusedSocket
		request.setHeader(name, value)
		request.setNoDelay([noDelay])
		request.setSocketKeepAlive([enable][, initialDelay])
		request.setTimeout(timeout[, callback])
		request.socket
		request.writableEnded
		request.writableFinished
		request.write(chunk[, encoding][, callback])
	Class: http.Server
		Event: 'checkContinue'
		Event: 'checkExpectation'
		Event: 'clientError'
		Event: 'close'
		Event: 'connect'
		Event: 'connection'
		Event: 'request'
		Event: 'upgrade'
		server.close([callback])
		server.headersTimeout
		server.listen()
		server.listening
		server.maxHeadersCount
		server.setTimeout([msecs][, callback])
		server.timeout
		server.keepAliveTimeout
	Class: http.ServerResponse
		Event: 'close'
		Event: 'finish'
		response.addTrailers(headers)
		response.connection
		response.cork()
		response.end([data[, encoding]][, callback])
		response.finished
		response.flushHeaders()
		response.getHeader(name)
		response.getHeaderNames()
		response.getHeaders()
		response.hasHeader(name)
		response.headersSent
		response.removeHeader(name)
		response.sendDate
		response.setHeader(name, value)
		response.setTimeout(msecs[, callback])
		response.socket
		response.statusCode
		response.statusMessage
		response.uncork()
		response.writableEnded
		response.writableFinished
		response.write(chunk[, encoding][, callback])
		response.writeContinue()
		response.writeHead(statusCode[, statusMessage][, headers])
		response.writeProcessing()
	Class: http.IncomingMessage
		Event: 'aborted'
		Event: 'close'
		message.aborted
		message.complete
		message.destroy([error])
		message.headers
		message.httpVersion
		message.method
		message.rawHeaders
		message.rawTrailers
		message.setTimeout(msecs[, callback])
		message.socket
		message.statusCode
		message.statusMessage
		message.trailers
		message.url
	http.METHODS
	http.STATUS_CODES
	http.createServer([options][, requestListener])
	http.get(options[, callback])
	http.get(url[, options][, callback])
	http.globalAgent
	http.maxHeaderSize
	http.request(options[, callback])
	http.request(url[, options][, callback])

 HTTP: To use the HTTP server and client one must require('http').

 The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses — the user is able to stream data.

 HTTP message headers are represented by an object like this:

	{ 'content-length': '123',
   	  'content-type': 'text/plain',
  	  'connection': 'keep-alive',
  	  'host': 'mysite.com',
  	  'accept': '*/*' }

 Keys are lowercased. Values are not modified.

 In order to support the full spectrum of possible HTTP applications, Node.js's HTTP API is very low-level. It deals with stream handling and message parsing only. It parses a message into headers and body but it does not parse the actual headers or the body.

 See message.headers for details on how duplicate headers are handled.

 The raw headers as they were received are retained in the rawHeaders property, which is an array of [key, value, key2, value2, ...]. For example, the previous message header object might have a rawHeaders list like the following:

	[ 'ConTent-Length', '123456',
	  'content-LENGTH', '123',
	  'content-type', 'text/plain',
	  'CONNECTION', 'keep-alive',
	  'Host', 'mysite.com',
	  'accepT', '*/*' ]

*/
