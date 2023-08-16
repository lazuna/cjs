// Server side code.

var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) { 
  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
});

// Client side, index.html file.
/*
<html>
<head>
<script src="http://localhost:3000/socket.io/socket.io.js"></script>
<script type="text/javascript" charset="utf-8">
    var socket = io.connect('http://localhost:3000');

    socket.on('entrance', function  (data) {
        document.write('<p>' + data.message + '</p>');
    });
</script>
</head>
<body>

</body>
</html>
// Added Socket.io library to source, next we are making a connection to the library.
// Assigned a function to entrance event on that Socket. So whenever we get the data we are going to write it to document.
*/
