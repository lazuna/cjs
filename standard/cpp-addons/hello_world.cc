// hello.cc
#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::NewStringType;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "world", NewStringType::kNormal).ToLocalChecked());
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo

/*
 All Node.js Addons must export an initialization function following the pattern:

	void Initialize(Local<Object> exports);
	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

There is no semi-colon after NODE_MODULE as it's not a function (see node.h).

The module_name must match the filename of the final binary (excluding the .node suffix).

In the hello.cc example, then, the initialization function is Initialize and the addon module name is addon.

When building addons with node-gyp, using the macro NODE_GYP_MODULE_NAME as the first parameter of NODE_MODULE() will ensure that the name of the final binary will be passed to NODE_MODULE().
*/
