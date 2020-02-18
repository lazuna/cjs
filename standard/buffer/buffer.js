/*
 Buffer
	Buffer.from(), Buffer.alloc(), and Buffer.allocUnsafe()
		The --zero-fill-buffers command line option
		What makes Buffer.allocUnsafe() and Buffer.allocUnsafeSlow() "unsafe"?
	Buffers and Character Encodings
	Buffers and TypedArray
	Buffers and iteration
	Class: Buffer
		new Buffer(array)
		new Buffer(arrayBuffer[, byteOffset[, length]])
		new Buffer(buffer)
		new Buffer(size)
		new Buffer(string[, encoding])
		Class Method: Buffer.alloc(size[, fill[, encoding]])
		Class Method: Buffer.allocUnsafe(size)
		Class Method: Buffer.allocUnsafeSlow(size)
		Class Method: Buffer.byteLength(string[, encoding])
		Class Method: Buffer.compare(buf1, buf2)
		Class Method: Buffer.concat(list[, totalLength])
		Class Method: Buffer.from(array)
		Class Method: Buffer.from(arrayBuffer[, byteOffset[, length]])
		Class Method: Buffer.from(buffer)
		Class Method: Buffer.from(object[, offsetOrEncoding[, length]])
		Class Method: Buffer.from(string[, encoding])
		Class Method: Buffer.isBuffer(obj)
		Class Method: Buffer.isEncoding(encoding)
		Class Property: Buffer.poolSize
		buf[index]
		buf.buffer
		buf.byteOffset
		buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
		buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
		buf.entries()
		buf.equals(otherBuffer)
		buf.fill(value[, offset[, end]][, encoding])
		buf.includes(value[, byteOffset][, encoding])
		buf.indexOf(value[, byteOffset][, encoding])
		buf.keys()
		buf.lastIndexOf(value[, byteOffset][, encoding])
		buf.length
		buf.parent
		buf.readBigInt64BE([offset])
		buf.readBigInt64LE([offset])
		buf.readBigUInt64BE([offset])
		buf.readBigUInt64LE([offset])
		buf.readDoubleBE([offset])
		buf.readDoubleLE([offset])
		buf.readFloatBE([offset])
		buf.readFloatLE([offset])
		buf.readInt8([offset])
		buf.readInt16BE([offset])
		buf.readInt16LE([offset])
		buf.readInt32BE([offset])
		buf.readInt32LE([offset])
		buf.readIntBE(offset, byteLength)
		buf.readIntLE(offset, byteLength)
		buf.readUInt8([offset])
		buf.readUInt16BE([offset])
		buf.readUInt16LE([offset])
		buf.readUInt32BE([offset])
		buf.readUInt32LE([offset])
		buf.readUIntBE(offset, byteLength)
		buf.readUIntLE(offset, byteLength)
		buf.subarray([start[, end]])
		buf.slice([start[, end]])
		buf.swap16()
		buf.swap32()
		buf.swap64()
		buf.toJSON()
		buf.toString([encoding[, start[, end]]])
		buf.values()
		buf.write(string[, offset[, length]][, encoding])
		buf.writeBigInt64BE(value[, offset])
		buf.writeBigInt64LE(value[, offset])
		buf.writeBigUInt64BE(value[, offset])
		buf.writeBigUInt64LE(value[, offset])
		buf.writeDoubleBE(value[, offset])
		buf.writeDoubleLE(value[, offset])
		buf.writeFloatBE(value[, offset])
		buf.writeFloatLE(value[, offset])
		buf.writeInt8(value[, offset])
		buf.writeInt16BE(value[, offset])
		buf.writeInt16LE(value[, offset])
		buf.writeInt32BE(value[, offset])
		buf.writeInt32LE(value[, offset])
		buf.writeIntBE(value, offset, byteLength)
		buf.writeIntLE(value, offset, byteLength)
		buf.writeUInt8(value[, offset])
		buf.writeUInt16BE(value[, offset])
		buf.writeUInt16LE(value[, offset])
		buf.writeUInt32BE(value[, offset])
		buf.writeUInt32LE(value[, offset])
		buf.writeUIntBE(value, offset, byteLength)
		buf.writeUIntLE(value, offset, byteLength)
	buffer.INSPECT_MAX_BYTES
	buffer.kMaxLength
	buffer.transcode(source, fromEnc, toEnc)
	Class: SlowBuffer
		new SlowBuffer(size)
	Buffer Constants
		buffer.constants.MAX_LENGTH
		buffer.constants.MAX_STRING_LENGTH

 Buffer: Prior to the introduction of TypedArray, the JavaScript language had no mechanism for reading or manipulating streams of binary data. The Buffer class was introduced as part of the Node.js API to enable interaction with octet streams in TCP streams, file system operations, and other contexts.

With TypedArray now available, the Buffer class implements the Uint8Array API in a manner that is more optimized and suitable for Node.js.

Instances of the Buffer class are similar to arrays of integers from 0 to 255 (other integers are coerced to this range by & 255 operation) but correspond to fixed-sized, raw memory allocations outside the V8 heap. The size of the Buffer is established when it is created and cannot be changed.

The Buffer class is within the global scope, making it unlikely that one would need to ever use require('buffer').Buffer.

 Example:

*/

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
const buf3 = Buffer.allocUnsafe(10);

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1, 2, 3]);

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf5 = Buffer.from('tést');

// Creates a Buffer containing Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf6 = Buffer.from('tést', 'latin1');

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
console.log(buf5);
console.log(buf6);
