/*
 N-API
	Implications of ABI Stability
	Building
		Build tools
			node-gyp
			CMake.js
		Uploading precompiled binaries
			node-pre-gyp
			prebuild
			prebuildify
	Usage
	N-API Version Matrix
	Environment Life Cycle APIs
		napi_set_instance_data
		napi_get_instance_data
	Basic N-API Data Types
		napi_status
		napi_extended_error_info
		napi_env
		napi_value
		napi_threadsafe_function
		napi_threadsafe_function_release_mode
		napi_threadsafe_function_call_mode
		N-API Memory Management types
			napi_handle_scope
			napi_escapable_handle_scope
			napi_ref
		N-API Callback types
			napi_callback_info
			napi_callback
			napi_finalize
			napi_async_execute_callback
			napi_async_complete_callback
			napi_threadsafe_function_call_js
	Error Handling
		Return values
			napi_get_last_error_info
		Exceptions
			napi_throw
			napi_throw_error
			napi_throw_type_error
			napi_throw_range_error
			napi_is_error
			napi_create_error
			napi_create_type_error
			napi_create_range_error
			napi_get_and_clear_last_exception
			napi_is_exception_pending
			napi_fatal_exception
		Fatal Errors
			napi_fatal_error
	Object Lifetime management
		Making handle lifespan shorter than that of the native method
			napi_open_handle_scope
			napi_close_handle_scope
			napi_open_escapable_handle_scope
			napi_close_escapable_handle_scope
			napi_escape_handle
		References to objects with a lifespan longer than that of the native method
			napi_create_reference
			napi_delete_reference
			napi_reference_ref
			napi_reference_unref
			napi_get_reference_value
		Cleanup on exit of the current Node.js instance
			napi_add_env_cleanup_hook
			napi_remove_env_cleanup_hook
	Module registration
	Working with JavaScript Values
		Enum types
			napi_valuetype
			napi_typedarray_type
		Object Creation Functions
			napi_create_array
			napi_create_array_with_length
			napi_create_arraybuffer
			napi_create_buffer
			napi_create_buffer_copy
			napi_create_date
			napi_create_external
			napi_create_external_arraybuffer
			napi_create_external_buffer
			napi_create_object
			napi_create_symbol
			napi_create_typedarray
			napi_create_dataview
		Functions to convert from C types to N-API
			napi_create_int32
			napi_create_uint32
			napi_create_int64
			napi_create_double
			napi_create_bigint_int64
			napi_create_bigint_uint64
			napi_create_bigint_words
			napi_create_string_latin1
			napi_create_string_utf16
			napi_create_string_utf8
		Functions to convert from N-API to C types
			napi_get_array_length
			napi_get_arraybuffer_info
			napi_get_buffer_info
			napi_get_prototype
			napi_get_typedarray_info
			napi_get_dataview_info
			napi_get_date_value
			napi_get_value_bool
			napi_get_value_double
			napi_get_value_bigint_int64
			napi_get_value_bigint_uint64
			napi_get_value_bigint_words
			napi_get_value_external
			napi_get_value_int32
			napi_get_value_int64
			napi_get_value_string_latin1
			napi_get_value_string_utf8
			napi_get_value_string_utf16
			napi_get_value_uint32
		Functions to get global instances
			napi_get_boolean
			napi_get_global
			napi_get_null
			napi_get_undefined
	Working with JavaScript Values and Abstract Operations
		napi_coerce_to_bool
		napi_coerce_to_number
		napi_coerce_to_object
		napi_coerce_to_string
		napi_typeof
		napi_instanceof
		napi_is_array
		napi_is_arraybuffer
		napi_is_buffer
		napi_is_date
		napi_is_error
		napi_is_typedarray
		napi_is_dataview
		napi_strict_equals
		napi_detach_arraybuffer
		napi_is_detached_arraybuffer
	Working with JavaScript Properties
		Structures
			napi_property_attributes
			napi_property_descriptor
	Functions
		napi_get_property_names
		napi_set_property
		napi_get_property
		napi_has_property
		napi_delete_property
		napi_has_own_property
		napi_set_named_property
		napi_get_named_property
		napi_has_named_property
		napi_set_element
		napi_get_element
		napi_has_element
		napi_delete_element
		napi_define_properties
	Working with JavaScript Functions
		napi_call_function
		napi_create_function
		napi_get_cb_info
		napi_get_new_target
		napi_new_instance
	Object Wrap
		napi_define_class
		napi_wrap
		napi_unwrap
		napi_remove_wrap
		napi_add_finalizer
	Simple Asynchronous Operations
		napi_create_async_work
		napi_delete_async_work
		napi_queue_async_work
		napi_cancel_async_work
	Custom Asynchronous Operations
		napi_async_init
		napi_async_destroy
		napi_make_callback
		napi_open_callback_scope
		napi_close_callback_scope
	Version Management
		napi_get_node_version
		napi_get_version
	Memory Management
		napi_adjust_external_memory
	Promises
		napi_create_promise
		napi_resolve_deferred
		napi_reject_deferred
		napi_is_promise
	Script execution
		napi_run_script
	libuv event loop
		napi_get_uv_event_loop
	Asynchronous Thread-safe Function Calls
		napi_create_threadsafe_function
		napi_get_threadsafe_function_context
		napi_call_threadsafe_function
		napi_acquire_threadsafe_function
		napi_release_threadsafe_function
		napi_ref_threadsafe_function
		napi_unref_threadsafe_function

 N-API: N-API (pronounced N as in the letter, followed by API) is an API for building native Addons. It is independent from the underlying JavaScript runtime (for example, V8) and is maintained as part of Node.js itself. This API will be Application Binary Interface (ABI) stable across versions of Node.js. It is intended to insulate Addons from changes in the underlying JavaScript engine and allow modules compiled for one major version to run on later major versions of Node.js without recompilation. The ABI Stability guide provides a more in-depth explanation.

Addons are built/packaged with the same approach/tools outlined in the section titled C++ Addons. The only difference is the set of APIs that are used by the native code. Instead of using the V8 or Native Abstractions for Node.js APIs, the functions available in the N-API are used.

APIs exposed by N-API are generally used to create and manipulate JavaScript values. Concepts and operations generally map to ideas specified in the ECMA-262 Language Specification. The APIs have the following properties:
	- All N-API calls return a status code of type napi_status. This status indicates whether the API call succeeded or failed.
	- The API's return value is passed via an out parameter.
	- All JavaScript values are abstracted behind an opaque type named napi_value.
	- In case of an error status code, additional information can be obtained using napi_get_last_error_info. More information can be found in the error handling section Error Handling.

The N-API is a C API that ensures ABI stability across Node.js versions and different compiler levels. A C++ API can be easier to use. To support using C++, the project maintains a C++ wrapper module called node-addon-api. This wrapper provides an inlineable C++ API. Binaries built with node-addon-api will depend on the symbols for the N-API C-based functions exported by Node.js. node-addon-api is a more efficient way to write code that calls N-API. Take, for example, the following node-addon-api code. The first section shows the node-addon-api code and the second section shows what actually gets used in the addon.


	Object obj = Object::New(env);
	obj["foo"] = String::New(env, "bar");


	napi_status status;
	napi_value object, string;
	status = napi_create_object(env, &object);
	if (status != napi_ok) {
	  napi_throw_error(env, ...);
	  return;
	}

	status = napi_create_string_utf8(env, "bar", NAPI_AUTO_LENGTH, &string);
	if (status != napi_ok) {
	  napi_throw_error(env, ...);
	  return;
	}

	status = napi_set_named_property(env, object, "foo", string);
	if (status != napi_ok) {
	  napi_throw_error(env, ...);
	  return;
	}

 The end result is that the addon only uses the exported C APIs. As a result, it still gets the benefits of the ABI stability provided by the C API.
*/
