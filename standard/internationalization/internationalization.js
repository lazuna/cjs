/*
 Internationalization Support
	Options for building Node.js
		Disable all internationalization features (none)
		Build with a pre-installed ICU (system-icu)
		Embed a limited set of ICU data (small-icu)
			Providing ICU data at runtime
		Embed the entire ICU (full-icu)
	Detecting internationalization support

 Internationalization Support: Node.js has many features that make it easier to write internationalized programs. Some of them are:
	Locale-sensitive or Unicode-aware functions in the ECMAScript Language Specification:
		String.prototype.normalize()
		String.prototype.toLowerCase()
		String.prototype.toUpperCase()
	All functionality described in the ECMAScript Internationalization API Specification (aka ECMA-402):
		Intl object
		Locale-sensitive methods like String.prototype.localeCompare() and Date.prototype.toLocaleString()
	The WHATWG URL parser's internationalized domain names (IDNs) support
	require('buffer').transcode()
	More accurate REPL line editing
	require('util').TextDecoder
	RegExp Unicode Property Escapes

 Node.js (and its underlying V8 engine) uses ICU to implement these features in native C/C++ code. However, some of them require a very large ICU data file in order to support all locales of the world. Because it is expected that most Node.js users will make use of only a small portion of ICU functionality, only a subset of the full ICU data set is provided by Node.js by default. Several options are provided for customizing and expanding the ICU data set either when building or running Node.js.

*/
