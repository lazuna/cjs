/*
 File System
	File paths
		URL object support
	File Descriptors
	Threadpool Usage
	Class fs.Dir
		dir.close()
		dir.close(callback)
		dir.closeSync()
		dir.path
		dir.read()
		dir.read(callback)
		dir.readSync()
		dir[Symbol.asyncIterator]()
	Class: fs.Dirent
		dirent.isBlockDevice()
		dirent.isCharacterDevice()
		dirent.isDirectory()
		dirent.isFIFO()
		dirent.isFile()
		dirent.isSocket()
		dirent.isSymbolicLink()
		dirent.name
	Class: fs.FSWatcher
		Event: 'change'
		Event: 'close'
		Event: 'error'
		watcher.close()
	Class: fs.ReadStream
		Event: 'close'
		Event: 'open'
		Event: 'ready'
		readStream.bytesRead
		readStream.path
		readStream.pending
	Class: fs.Stats
		stats.isBlockDevice()
		stats.isCharacterDevice()
		stats.isDirectory()
		stats.isFIFO()
		stats.isFile()
		stats.isSocket()
		stats.isSymbolicLink()
		stats.dev
		stats.ino
		stats.mode
		stats.nlink
		stats.uid
		stats.gid
		stats.rdev
		stats.size
		stats.blksize
		stats.blocks
		stats.atimeMs
		stats.mtimeMs
		stats.ctimeMs
		stats.birthtimeMs
		stats.atimeNs
		stats.mtimeNs
		stats.ctimeNs
		stats.birthtimeNs
		stats.atime
		stats.mtime
		stats.ctime
		stats.birthtime
		Stat Time Values
	Class: fs.WriteStream
		Event: 'close'
		Event: 'open'
		Event: 'ready'
		writeStream.bytesWritten
		writeStream.path
		writeStream.pending
	fs.access(path[, mode], callback)
	fs.accessSync(path[, mode])
	fs.appendFile(path, data[, options], callback)
	fs.appendFileSync(path, data[, options])
	fs.chmod(path, mode, callback)
		File modes
	fs.chmodSync(path, mode)
	fs.chown(path, uid, gid, callback)
	fs.chownSync(path, uid, gid)
	fs.close(fd, callback)
	fs.closeSync(fd)
	fs.constants
	fs.copyFile(src, dest[, flags], callback)
	fs.copyFileSync(src, dest[, flags])
	fs.createReadStream(path[, options])
	fs.createWriteStream(path[, options])
	fs.exists(path, callback)
	fs.existsSync(path)
	fs.fchmod(fd, mode, callback)
	fs.fchmodSync(fd, mode)
	fs.fchown(fd, uid, gid, callback)
	fs.fchownSync(fd, uid, gid)
	fs.fdatasync(fd, callback)
	fs.fdatasyncSync(fd)
	fs.fstat(fd[, options], callback)
	fs.fstatSync(fd[, options])
	fs.fsync(fd, callback)
	fs.fsyncSync(fd)
	fs.ftruncate(fd[, len], callback)
	fs.ftruncateSync(fd[, len])
	fs.futimes(fd, atime, mtime, callback)
	fs.futimesSync(fd, atime, mtime)
	fs.lchmod(path, mode, callback)
	fs.lchmodSync(path, mode)
	fs.lchown(path, uid, gid, callback)
	fs.lchownSync(path, uid, gid)
	fs.link(existingPath, newPath, callback)
	fs.linkSync(existingPath, newPath)
	fs.lstat(path[, options], callback)
	fs.lstatSync(path[, options])
	fs.mkdir(path[, options], callback)
	fs.mkdirSync(path[, options])
	fs.mkdtemp(prefix[, options], callback)
	fs.mkdtempSync(prefix[, options])
	fs.open(path[, flags[, mode]], callback)
	fs.opendir(path[, options], callback)
	fs.opendirSync(path[, options])
	fs.openSync(path[, flags, mode])
	fs.read(fd, buffer, offset, length, position, callback)
	fs.readdir(path[, options], callback)
	fs.readdirSync(path[, options])
	fs.readFile(path[, options], callback)
		File Descriptors
	fs.readFileSync(path[, options])
	fs.readlink(path[, options], callback)
	fs.readlinkSync(path[, options])
	fs.readSync(fd, buffer, offset, length, position)
	fs.realpath(path[, options], callback)
	fs.realpath.native(path[, options], callback)
	fs.realpathSync(path[, options])
	fs.realpathSync.native(path[, options])
	fs.rename(oldPath, newPath, callback)
	fs.renameSync(oldPath, newPath)
	fs.rmdir(path[, options], callback)
	fs.rmdirSync(path[, options])
	fs.stat(path[, options], callback)
	fs.statSync(path[, options])
	fs.symlink(target, path[, type], callback)
	fs.symlinkSync(target, path[, type])
	fs.truncate(path[, len], callback)
	fs.truncateSync(path[, len])
	fs.unlink(path, callback)
	fs.unlinkSync(path)
	fs.unwatchFile(filename[, listener])
	fs.utimes(path, atime, mtime, callback)
	fs.utimesSync(path, atime, mtime)
	fs.watch(filename[, options][, listener])
		Caveats
			Availability
			Inodes
			Filename Argument
	fs.watchFile(filename[, options], listener)
	fs.write(fd, buffer[, offset[, length[, position]]], callback)
	fs.write(fd, string[, position[, encoding]], callback)
	fs.writeFile(file, data[, options], callback)
		Using fs.writeFile() with File Descriptors
	fs.writeFileSync(file, data[, options])
	fs.writeSync(fd, buffer[, offset[, length[, position]]])
	fs.writeSync(fd, string[, position[, encoding]])
	fs.writev(fd, buffers[, position], callback)
	fs.writevSync(fd, buffers[, position])
	fs Promises API
		class: FileHandle
			filehandle.appendFile(data, options)
			filehandle.chmod(mode)
			filehandle.chown(uid, gid)
			filehandle.close()
			filehandle.datasync()
			filehandle.fd
			filehandle.read(buffer, offset, length, position)
			filehandle.readFile(options)
			filehandle.stat([options])
			filehandle.sync()
			filehandle.truncate(len)
			filehandle.utimes(atime, mtime)
			filehandle.write(buffer[, offset[, length[, position]]])
			filehandle.write(string[, position[, encoding]])
			filehandle.writeFile(data, options)
			filehandle.writev(buffers[, position])
		fsPromises.access(path[, mode])
		fsPromises.appendFile(path, data[, options])
		fsPromises.chmod(path, mode)
		fsPromises.chown(path, uid, gid)
		fsPromises.copyFile(src, dest[, flags])
		fsPromises.lchmod(path, mode)
		fsPromises.lchown(path, uid, gid)
		fsPromises.link(existingPath, newPath)
		fsPromises.lstat(path[, options])
		fsPromises.mkdir(path[, options])
		fsPromises.mkdtemp(prefix[, options])
		fsPromises.open(path, flags[, mode])
		fsPromises.opendir(path[, options])
		fsPromises.readdir(path[, options])
		fsPromises.readFile(path[, options])
		fsPromises.readlink(path[, options])
		fsPromises.realpath(path[, options])
		fsPromises.rename(oldPath, newPath)
		fsPromises.rmdir(path[, options])
		fsPromises.stat(path[, options])
		fsPromises.symlink(target, path[, type])
		fsPromises.truncate(path[, len])
		fsPromises.unlink(path)
		fsPromises.utimes(path, atime, mtime)
		fsPromises.writeFile(file, data[, options])
	FS Constants
		File Access Constants
		File Copy Constants
		File Open Constants
		File Type Constants
		File Mode Constants
	File System Flags

File System: The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

To use this module:

	const fs = require('fs');

All file system operations have synchronous and asynchronous forms.

The asynchronous form always takes a completion callback as its last argument. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. If the operation was completed successfully, then the first argument will be null or undefined.

*/

const fs = require('fs');

fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});

/*

Exceptions that occur using synchronous operations are thrown immediately and may be handled using try…catch, or may be allowed to bubble up.

*/

try {
  fs.unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}

/*

There is no guaranteed ordering when using asynchronous methods. So the following is prone to error because the fs.stat() operation may complete before the fs.rename() operation:

*/

fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});

fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});

/*

To correctly order the operations, move the fs.stat() call into the callback of the fs.rename() operation:

*/

fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  fs.stat('/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});

/*

In busy processes, use the asynchronous versions of these calls. The synchronous versions will block the entire process until they complete, halting all connections.

While it is not recommended, most fs functions allow the callback argument to be omitted, in which case a default callback is used that rethrows errors. To get a trace to the original call site, set the NODE_DEBUG environment variable:

Omitting the callback function on asynchronous fs functions is deprecated and may result in an error being thrown in the future.

$ cat script.js
function bad() {
  require('fs').readFile('/');
}
bad();

$ env NODE_DEBUG=fs node script.js
fs.js:88
        throw backtrace;
        ^
Error: EISDIR: illegal operation on a directory, read
    <stack trace.>

*/
