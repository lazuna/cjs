/*
 HTTP/2
	Core API
		Server-side example
		Client-side example
		Class: Http2Session
			Http2Session and Sockets
			Event: 'close'
			Event: 'connect'
			Event: 'error'
			Event: 'frameError'
			Event: 'goaway'
			Event: 'localSettings'
			Event: 'ping'
			Event: 'remoteSettings'
			Event: 'stream'
			Event: 'timeout'
			http2session.alpnProtocol
			http2session.close([callback])
			http2session.closed
			http2session.connecting
			http2session.destroy([error][, code])
			http2session.destroyed
			http2session.encrypted
			http2session.goaway([code[, lastStreamID[, opaqueData]]])
			http2session.localSettings
			http2session.originSet
			http2session.pendingSettingsAck
			http2session.ping([payload, ]callback)
			http2session.ref()
			http2session.remoteSettings
			http2session.setTimeout(msecs, callback)
			http2session.socket
			http2session.state
			http2session.settings([settings][, callback])
			http2session.type
			http2session.unref()
		Class: ServerHttp2Session
			serverhttp2session.altsvc(alt, originOrStream)
			Specifying alternative services
			serverhttp2session.origin(...origins)
		Class: ClientHttp2Session
			Event: 'altsvc'
			Event: 'origin'
			clienthttp2session.request(headers[, options])
		Class: Http2Stream
			Http2Stream Lifecycle
				Creation
				Destruction
			Event: 'aborted'
			Event: 'close'
			Event: 'error'
			Event: 'frameError'
			Event: 'timeout'
			Event: 'trailers'
			Event: 'wantTrailers'
			http2stream.aborted
			http2stream.bufferSize
			http2stream.close(code[, callback])
			http2stream.closed
			http2stream.destroyed
			http2stream.endAfterHeaders
			http2stream.id
			http2stream.pending
			http2stream.priority(options)
			http2stream.rstCode
			http2stream.sentHeaders
			http2stream.sentInfoHeaders
			http2stream.sentTrailers
			http2stream.session
			http2stream.setTimeout(msecs, callback)
			http2stream.state
			http2stream.sendTrailers(headers)
		Class: ClientHttp2Stream
			Event: 'continue'
			Event: 'headers'
			Event: 'push'
			Event: 'response'
		Class: ServerHttp2Stream
			http2stream.additionalHeaders(headers)
			http2stream.headersSent
			http2stream.pushAllowed
			http2stream.pushStream(headers[, options], callback)
			http2stream.respond([headers[, options]])
			http2stream.respondWithFD(fd[, headers[, options]])
			http2stream.respondWithFile(path[, headers[, options]])
		Class: Http2Server
			Event: 'checkContinue'
			Event: 'request'
			Event: 'session'
			Event: 'sessionError'
			Event: 'stream'
			Event: 'timeout'
			server.close([callback])
			server.setTimeout([msecs][, callback])
		Class: Http2SecureServer
			Event: 'checkContinue'
			Event: 'request'
			Event: 'session'
			Event: 'sessionError'
			Event: 'stream'
			Event: 'timeout'
			Event: 'unknownProtocol'
			server.close([callback])
			server.setTimeout([msecs][, callback])
		http2.createServer(options[, onRequestHandler])
		http2.createSecureServer(options[, onRequestHandler])
		http2.connect(authority[, options][, listener])
		http2.constants
			Error Codes for RST_STREAM and GOAWAY
		http2.getDefaultSettings()
		http2.getPackedSettings([settings])
		http2.getUnpackedSettings(buf)
		Headers Object
		Settings Object
		Using options.selectPadding()
		Error Handling
		Invalid character handling in header names and values
		Push streams on the client
		Supporting the CONNECT method
		The Extended CONNECT Protocol
	Compatibility API
		ALPN negotiation
		Class: http2.Http2ServerRequest
			Event: 'aborted'
			Event: 'close'
			request.aborted
			request.authority
			request.complete
			request.destroy([error])
			request.headers
			request.httpVersion
			request.method
			request.rawHeaders
			request.rawTrailers
			request.scheme
			request.setTimeout(msecs, callback)
			request.socket
			request.stream
			request.trailers
			request.url
		Class: http2.Http2ServerResponse
			Event: 'close'
			Event: 'finish'
			response.addTrailers(headers)
			response.connection
			response.end([data[, encoding]][, callback])
			response.finished
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
			response.stream
			response.writableEnded
			response.write(chunk[, encoding][, callback])
			response.writeContinue()
			response.writeHead(statusCode[, statusMessage][, headers])
			response.createPushResponse(headers, callback)
		Collecting HTTP/2 Performance Metrics

 HTTP/2: The http2 module provides an implementation of the HTTP/2 protocol. It can be accessed using:

	const http2 = require('http2');

 Core API: The Core API provides a low-level interface designed specifically around support for HTTP/2 protocol features. It is specifically not designed for compatibility with the existing HTTP/1 module API. However, the Compatibility API is.

 The http2 Core API is much more symmetric between client and server than the http API. For instance, most events, like 'error', 'connect' and 'stream', can be emitted either by client-side code or server-side code.

Server-side example: The following illustrates a simple HTTP/2 server using the Core API. Since there are no browsers known that support unencrypted HTTP/2, the use of http2.createSecureServer() is necessary when communicating with browser clients.

*/

const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
});
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});

server.listen(8443);

/*

 To generate the certificate and key for this example, run:

	openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  	-keyout localhost-privkey.pem -out localhost-cert.pem

Client-side example: The following illustrates an HTTP/2 client:

const http2 = require('http2');
const fs = require('fs');
const client = http2.connect('https://localhost:8443', {
  ca: fs.readFileSync('localhost-cert.pem')
});
client.on('error', (err) => console.error(err));

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) => { data += chunk; });
req.on('end', () => {
  console.log(`\n${data}`);
  client.close();
});
req.end();

*/
