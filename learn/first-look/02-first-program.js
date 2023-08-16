
var os = require('os');
var message = 'This script is running on Node.js ' + process.version + ' on a ' + os.type() + '-based operating system.';

console.log(message); // This script is running on Node.js v6.8.0 on a Windows_NT-based operating system.
