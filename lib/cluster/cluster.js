/*
 Cluster
	How It Works
	Class: Worker
		Event: 'disconnect'
		Event: 'error'
		Event: 'exit'
		Event: 'listening'
		Event: 'message'
		Event: 'online'
		worker.disconnect()
		worker.exitedAfterDisconnect
		worker.id
		worker.isConnected()
		worker.isDead()
		worker.kill([signal='SIGTERM'])
		worker.process
		worker.send(message[, sendHandle[, options]][, callback])
	Event: 'disconnect'
	Event: 'exit'
	Event: 'fork'
	Event: 'listening'
	Event: 'message'
	Event: 'online'
	Event: 'setup'
	cluster.disconnect([callback])
	cluster.fork([env])
	cluster.isMaster
	cluster.isWorker
	cluster.schedulingPolicy
	cluster.settings
	cluster.setupMaster([settings])
	cluster.worker
	cluster.workers

 Cluster: A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.

 The cluster module allows easy creation of child processes that all share server ports.

*/

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
