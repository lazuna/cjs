/*
 Child Process
	Asynchronous Process Creation
		Spawning .bat and .cmd files on Windows
		child_process.exec(command[, options][, callback])
		child_process.execFile(file[, args][, options][, callback])
		child_process.fork(modulePath[, args][, options])
		child_process.spawn(command[, args][, options])
			options.detached
			options.stdio
	Synchronous Process Creation
		child_process.execFileSync(file[, args][, options])
		child_process.execSync(command[, options])
		child_process.spawnSync(command[, args][, options])
	Class: ChildProcess
		Event: 'close'
		Event: 'disconnect'
		Event: 'error'
		Event: 'exit'
		Event: 'message'
		subprocess.channel
		subprocess.connected
		subprocess.disconnect()
		subprocess.kill([signal])
		subprocess.killed
		subprocess.pid
		subprocess.ref()
		subprocess.send(message[, sendHandle[, options]][, callback])
			Example: sending a server object
			Example: sending a socket object
		subprocess.stderr
		subprocess.stdin
		subprocess.stdio
		subprocess.stdout
		subprocess.unref()
	maxBuffer and Unicode
	Shell Requirements
	Default Windows Shell
	Advanced Serialization

Child Process: The child_process module provides the ability to spawn child processes in a manner that is similar, but not identical, to popen(3). This capability is primarily provided by the child_process.spawn() function:

*/

const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

/*

By default, pipes for stdin, stdout, and stderr are established between the parent Node.js process and the spawned child. These pipes have limited (and platform-specific) capacity. If the child process writes to stdout in excess of that limit without the output being captured, the child process will block waiting for the pipe buffer to accept more data. This is identical to the behavior of pipes in the shell. Use the { stdio: 'ignore' } option if the output will not be consumed.

The child_process.spawn() method spawns the child process asynchronously, without blocking the Node.js event loop. The child_process.spawnSync() function provides equivalent functionality in a synchronous manner that blocks the event loop until the spawned process either exits or is terminated.

For convenience, the child_process module provides a handful of synchronous and asynchronous alternatives to child_process.spawn() and child_process.spawnSync(). Each of these alternatives are implemented on top of child_process.spawn() or child_process.spawnSync().
	- child_process.exec(): spawns a shell and runs a command within that shell, passing the stdout and stderr to a callback function when complete.
	- child_process.execFile(): similar to child_process.exec() except that it spawns the command directly without first spawning a shell by default.
	- child_process.fork(): spawns a new Node.js process and invokes a specified module with an IPC communication channel established that allows sending messages between parent and child.
	- child_process.execSync(): a synchronous version of child_process.exec() that will block the Node.js event loop.
	- child_process.execFileSync(): a synchronous version of child_process.execFile() that will block the Node.js event loop.

For certain use cases, such as automating shell scripts, the synchronous counterparts may be more convenient. In many cases, however, the synchronous methods can have significant impact on performance due to stalling the event loop while spawned processes complete.


*/






















