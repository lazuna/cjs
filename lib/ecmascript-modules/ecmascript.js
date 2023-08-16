/*
 ECMAScript Modules
	Introduction
	Enabling
		package.json "type" field
		Package Scope and File Extensions
		--input-type flag
	Packages
		Package Entry Points
			package.json "main"
			Package Exports
			Conditional Exports
			Exports Sugar
		Dual CommonJS/ES Module Packages
			Dual Package Hazard
			Writing Dual Packages While Avoiding or Minimizing Hazards
				Approach #1: Use an ES Module Wrapper
				Approach #2: Isolate State
	import Specifiers
		Terminology
			data: Imports
	import.meta
	Differences Between ES Modules and CommonJS
		Mandatory file extensions
		No NODE_PATH
		No require, exports, module.exports, __filename, __dirname
		No require.extensions
		No require.cache
		URL-based paths
	Interoperability with CommonJS
		require
		import statements
		import() expressions
	CommonJS, JSON, and Native Modules
	Builtin modules
	Experimental JSON Modules
	Experimental Wasm Modules
	Experimental Loaders
		Hooks
			resolve hook
			getFormat hook
			getSource hook
			transformSource hook
			dynamicInstantiate hook
		Examples
			HTTPS loader
			Transpiler loader
	Resolution Algorithm
		Features
		Resolver Algorithm
		Customizing ESM specifier resolution algorithm

ECMAScript Modules: ECMAScript modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements.

Node.js fully supports ECMAScript modules as they are currently specified and provides limited interoperability between them and the existing module format, CommonJS.

Node.js contains support for ES Modules based upon the Node.js EP for ES Modules and the ECMAScript-modules implementation.

Expect major changes in the implementation including interoperability support, specifier resolution, and default behavior.

*/
