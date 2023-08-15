/*
 Command Line Options
	Synopsis
	Options
		-
		--
		--abort-on-uncaught-exception
		--completion-bash
		--cpu-prof
		--cpu-prof-dir
		--cpu-prof-interval
		--cpu-prof-name
		--disallow-code-generation-from-strings
		--enable-fips
		--enable-source-maps
		--experimental-json-modules
		--experimental-modules
		--experimental-policy
		--experimental-repl-await
		--experimental-report
		--experimental-specifier-resolution=mode
		--experimental-vm-modules
		--experimental-wasi-unstable-preview1
		--experimental-wasm-modules
		--force-fips
		--frozen-intrinsics
		--heapsnapshot-signal=signal
		--heap-prof
		--heap-prof-dir
		--heap-prof-interval
		--heap-prof-name
		--http-parser=library
		--http-server-default-timeout=milliseconds
		--icu-data-dir=file
		--input-type=type
		--inspect-brk[=[host:]port]
		--inspect-port=[host:]port
		--inspect[=[host:]port]
			Warning: binding inspector to a public IP:port combination is insecure
		--inspect-publish-uid=stderr,http
		--experimental-loader=module
		--insecure-http-parser
		--max-http-header-size=size
		--napi-modules
		--no-deprecation
		--no-force-async-hooks-checks
		--no-warnings
		--force-context-aware
		--openssl-config=file
		--pending-deprecation
		--policy-integrity=sri
		--preserve-symlinks
		--preserve-symlinks-main
		--prof
		--prof-process
		--redirect-warnings=file
		--report-directory=directory
		--report-filename=filename
		--report-on-fatalerror
		--report-on-signal
		--report-signal=signal
		--report-uncaught-exception
		--throw-deprecation
		--title=title
		--tls-cipher-list=list
		--tls-keylog=file
		--tls-max-v1.2
		--tls-max-v1.3
		--tls-min-v1.0
		--tls-min-v1.1
		--tls-min-v1.2
		--tls-min-v1.3
		--trace-deprecation
		--trace-event-categories
		--trace-event-file-pattern
		--trace-events-enabled
		--trace-exit
		--trace-sync-io
		--trace-tls
		--trace-uncaught
		--trace-warnings
		--track-heap-objects
		--unhandled-rejections=mode
		--use-bundled-ca, --use-openssl-ca
		--v8-options
		--v8-pool-size=num
		--zero-fill-buffers
		-c, --check
		-e, --eval "script"
		-h, --help
		-i, --interactive
		-p, --print "script"
		-r, --require module
		-v, --version
	Environment Variables
		NODE_DEBUG=module[,…]
		NODE_DEBUG_NATIVE=module[,…]
		NODE_DISABLE_COLORS=1
		NODE_EXTRA_CA_CERTS=file
		NODE_ICU_DATA=file
		NODE_NO_WARNINGS=1
		NODE_OPTIONS=options...
		NODE_PATH=path[:…]
		NODE_PENDING_DEPRECATION=1
		NODE_PENDING_PIPE_INSTANCES=instances
		NODE_PRESERVE_SYMLINKS=1
		NODE_REDIRECT_WARNINGS=file
		NODE_REPL_HISTORY=file
		NODE_REPL_EXTERNAL_MODULE=file
		NODE_TLS_REJECT_UNAUTHORIZED=value
		NODE_V8_COVERAGE=dir
			Coverage Output
			Source Map Cache
		OPENSSL_CONF=file
		SSL_CERT_DIR=dir
		SSL_CERT_FILE=file
		UV_THREADPOOL_SIZE=size

 Command Line Options: Node.js comes with a variety of CLI options. These options expose built-in debugging, multiple ways to execute scripts, and other helpful runtime options.

 To view this documentation as a manual page in a terminal, run man node.

 Synopsis:

	node [options] [V8 options] [script.js | -e "script" | -] [--] [arguments]

	node inspect [script.js | -e "script" | <host>:<port>] …

	node --v8-options

 Execute without arguments to start the REPL.

*/
